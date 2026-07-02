import base64
import os
import time

from openai import OpenAI


client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
OUT = "public/images"
os.makedirs(OUT, exist_ok=True)

PROMPTS = [
    {
        "file": "natural-sisal-carpet.jpg",
        "size": "1536x1024",
        "prompt": "Professional product-catalog photograph, perfectly flat top-down view of a natural sisal carpet swatch filling the entire frame. Authentic 100% sisal plant fiber woven in a fine linen-look flatweave with subtle even ribbing, warm natural wheat-beige tone, visible organic fiber texture and slight tonal variation, matte finish, soft even studio lighting, no shadows, no props, seamless edge-to-edge fill, ultra-sharp, high resolution, commercial flooring photography. No text, no logos.",
    },
    {
        "file": "natural-sisal-carpet-roll.jpg",
        "size": "1536x1024",
        "prompt": "Professional studio product photo of a single roll of natural sisal broadloom carpet standing upright on a clean light-grey seamless background. The exposed face shows a fine linen-weave sisal texture in warm wheat-beige; the rolled edge reveals the natural fiber weave and a neutral jute backing. Soft even lighting, slight floor reflection, photorealistic, catalog quality, 4m-width roll. No text, no people, no logos.",
    },
    {
        "file": "natural-sisal-carpet-office.jpg",
        "size": "1536x1024",
        "prompt": "Photorealistic modern biophilic office reception interior with wall-to-wall natural sisal carpet in a warm wheat-beige linen weave covering the floor. Wood and greenery accents, neutral furniture, large windows with natural daylight, contemporary sustainable design. Wide-angle architectural interior photography, the textured sisal floor clearly visible and in sharp focus. No brand logos, no people.",
    },
    {
        "file": "natural-sisal-carpet-retail.jpg",
        "size": "1536x1024",
        "prompt": "Photorealistic upscale boutique retail interior with natural sisal carpet flooring in a warm neutral linen weave, minimalist clothing displays, warm spotlighting, refined natural materials, contemporary store design. Architectural photography, sisal floor texture sharp and prominent in the foreground. No people, no brand logos.",
    },
    {
        "file": "natural-sisal-carpet-lobby.jpg",
        "size": "1536x1024",
        "prompt": "Photorealistic spacious hotel lobby and exhibition public area with natural sisal broadloom carpet in a wheat-beige linen-weave texture covering a large floor area, modern columns, soft ambient lighting, seating clusters, plants, high-ceiling contemporary commercial interior. Wide architectural shot, the natural sisal floor dominating the foreground in sharp detail. No people, no brand marks.",
    },
    {
        "file": "natural-sisal-carpet-macro.jpg",
        "size": "1024x1024",
        "prompt": "Extreme close-up macro photograph of natural sisal carpet, showing the tightly woven plant-fiber linen-weave structure, fine ribbing, and organic tonal variation of warm wheat-beige sisal strands. Shallow depth of field, soft directional studio light revealing texture, photorealistic material detail shot for a product catalog. No text.",
    },
    {
        "file": "natural-sisal-carpet-backing.jpg",
        "size": "1024x1024",
        "prompt": "Product detail photograph showing the underside and cut edge of a natural sisal carpet, revealing a neutral jute secondary backing with a natural-latex non-slip coating on the bottom and the woven sisal face on top, the carpet folded back to show both layers. Clean white studio background, soft even lighting, photorealistic technical material close-up. No text.",
    },
    {
        "file": "natural-sisal-carpet-colorways.jpg",
        "size": "1536x1024",
        "prompt": "Flat-lay product grid of four natural sisal carpet swatches arranged in a neat 2x2 layout on a clean light background, each showing the same fine linen-weave sisal texture in a different natural colorway: wheat beige, warm greige, taupe brown, and charcoal grey. Organic fiber detail, matte finish, soft even studio lighting, catalog presentation, photorealistic. No text.",
    },
]

for p in PROMPTS:
    print("Generating", p["file"], "...")
    try:
        r = client.images.generate(
            model="gpt-image-1",
            prompt=p["prompt"],
            size=p["size"],
            quality="high",
            n=1,
        )
        data = base64.b64decode(r.data[0].b64_json)
        with open(os.path.join(OUT, p["file"]), "wb") as f:
            f.write(data)
        print("  saved", p["file"])
    except Exception as e:
        print("  FAILED", p["file"], "->", e)
    time.sleep(2)

print("Done.")
