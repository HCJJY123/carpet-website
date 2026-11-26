"""Run with Python Playwright and Chromium against a local build or VCARPETS PR Preview.
Example: python scripts/check-yandex-consent.py http://127.0.0.1:3000 --chromium /path/to/chromium
Optional third-party calls are intercepted; the vendor library is replaced with an inert recorder.
"""
import argparse
import asyncio
import json
import re
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

COUNTER = 111239007
TAG = "https://mc.yandex.ru/metrika/tag.js"
RECORDER = """window.ym=(id,method)=>console.log('VC_YM_QA '+JSON.stringify([id,method]));"""
PREFS = "VCARPETS_consent_preferences"


async def wait_for(predicate, description):
    for _ in range(100):
        if predicate():
            return
        await asyncio.sleep(0.05)
    raise AssertionError(description)


async def run_case(browser, origin, width):
    config = dict(viewport={"width": width, "height": 900}, service_workers="block")
    requests, calls = [], []
    tag_responses = [(None, None)]  # set events in the late-response test

    async def guard(route):
        req, url = route.request, urlsplit(route.request.url)
        if url.hostname in {"mc.yandex.ru", "mc.yandex.com"}:
            requests.append(url.path)
            if req.url == TAG:
                entered, release = tag_responses[0]
                if entered:
                    entered.set()
                    await release.wait()
                try:
                    await route.fulfill(status=200, content_type="application/javascript", body=RECORDER)
                except Exception:
                    if not entered:
                        raise   # a revoked, cancelled navigation is expected in the delayed case
                return
            return await route.abort()
        if (url.netloc != urlsplit(origin).netloc or req.method not in {"GET", "HEAD"}
                or url.path.startswith("/api/")):
            return await route.abort()
        return await route.continue_()

    async def context(js=True):
        ctx = await browser.new_context(java_script_enabled=js, **config)
        await ctx.route("**/*", guard)
        return ctx

    def capture(msg):
        if msg.text.startswith("VC_YM_QA "):
            calls.append(json.loads(msg.text[9:]))

    async def tab(ctx, path="/commercial-carpet-tiles"):
        page = await ctx.new_page()
        page.on("console", capture)
        res = await page.goto(origin + path, wait_until="load")
        assert res and res.status == 200, (path, res and res.status)
        return page

    async def preferences(page):
        await page.locator("footer").get_by_role("button", name="Cookie Preferences").click()

    async def choose(page, analytics, advertising):
        await preferences(page)
        await page.get_by_role("checkbox", name=re.compile("^Analytics")).set_checked(analytics)
        await page.get_by_role("checkbox", name=re.compile("^Advertising")).set_checked(advertising)
        await page.get_by_role("button", name="Save Preferences").click()
        await page.wait_for_function(
            """([k,a,d])=>{const p=JSON.parse(localStorage.getItem(k));return p?.analytics===a&&p?.advertising===d}""",
            arg=[PREFS, analytics, advertising],
        )

    # SSR must not contain a live tracker script/image, including with JS disabled.
    ctx = await context(False)
    pg = await tab(ctx, "/")
    assert not await pg.locator('script[src*="mc.yandex"],img[src*="mc.yandex"]').count()
    assert not requests, ("no-JS image or script", requests)
    await ctx.close()

    ctx = await context()
    first = await tab(ctx)
    await first.get_by_role("button", name="Reject Non-Essential").click()
    assert not requests, ("fresh or rejected", requests)
    await choose(first, False, True)
    assert not requests, ("advertising only", requests)
    # Use a fresh non-advertising context so granting Analytics does not also withdraw Advertising.
    await ctx.close()

    ctx = await context()
    first = await tab(ctx)
    await first.get_by_role("button", name="Reject Non-Essential").click()
    await choose(first, True, False)
    await wait_for(lambda: calls.count([COUNTER, "init"]) == 1, "Analytics did not initialize once")
    await choose(first, True, False)
    assert requests == ["/metrika/tag.js"], ("duplicate load or pixel", requests)

    # The second tab must honor the saved opt-in, then tear down on cross-tab withdrawal.
    second = await tab(ctx, "/")
    await wait_for(lambda: calls.count([COUNTER, "init"]) == 2, "saved Analytics preference")
    await choose(first, False, False)
    await wait_for(lambda: calls.count([COUNTER, "destruct"]) == 2, "both counters must stop")
    await first.reload(wait_until="load")
    await second.reload(wait_until="load")
    assert calls.count([COUNTER, "init"]) == 2 and requests == ["/metrika/tag.js"] * 2, ("after revoke", requests, calls)
    await ctx.close()

    # Withdraw before the optional library returns: a delayed onload must not initialize the counter.
    ctx = await context()
    first = await tab(ctx)
    entered, release = asyncio.Event(), asyncio.Event()
    tag_responses[0] = (entered, release)
    await first.get_by_role("button", name="Reject Non-Essential").click()
    await choose(first, True, False)
    await asyncio.wait_for(entered.wait(), timeout=7)
    await choose(first, False, False)
    release.set()
    await first.reload(wait_until="load")
    await ctx.close()
    assert requests == ["/metrika/tag.js"] * 3 and calls.count([COUNTER, "init"]) == 2, ("late initialization", requests, calls)
    print(f"PASS {width}px: fresh/reject/ad-only/analytics/withdraw/cross-tab/delayed/no-JS; no vendor traffic", flush=True)


async def main(args):
    origin = args.origin.rstrip("/")
    u = urlsplit(origin)
    host = u.hostname or ""
    if u.path or u.query or u.fragment or not (host in {"localhost", "127.0.0.1"} or
            (u.scheme == "https" and host.startswith("carpet-website-") and host.endswith("-mike123-s-projects.vercel.app"))):
        raise ValueError("Use a local build or exact carpet-website PR Preview hostname.")
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=args.chromium)
        await asyncio.gather(*(run_case(browser, origin, width) for width in (1440, 390, 375)))
        await browser.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("origin")
    parser.add_argument("--chromium")
    asyncio.run(main(parser.parse_args()))
