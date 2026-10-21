# VCARPETS: Open-plan office and natural sisal blogs — 21 October 2026

Owner selected proposed topics 2 and 4 and requested publication of two English blogs, at least three images per article. Baseline production and rollback commit: `ae856495984cbb62b5b662ebff1a3f28001a692e` (PR93). Branch: `content/open-plan-office-sisal-blogs-20261021`.

## Content and scope

- Office: `/blog/carpet-tiles-open-plan-office-acoustics-guide`. Distinguishes absorption, impact transmission and room/speech privacy; includes an original comparison record and RFQ brief. Existing hotel acoustic guide remains unchanged.
- Sisal: `/blog/natural-sisal-carpet-commercial-interiors-guide`. Covers commercial application screening, material identity, sample/border approval and maintenance; distinct from existing wholesale sourcing guide.
- Each article has one new hero and two new inline illustrations, descriptions, unique keyword ownership, six visible FAQs matching the existing FAQ JSON-LD mechanism, product links, sample and topic-prefilled quote links.
- Existing Blog index and sitemap mechanisms register both articles. Two category pages add a link to their relevant guide. No form, API, tracking, product specification, global SEO, DNS or dependency logic changes.
- Existing live HTML backed up before edits under scoped scratch `qa-before/`; public blog and both changed categories returned HTTP 200.

## Evidence reviewed

- CRI: https://carpet-rug.org/wp-content/uploads/2018/08/Acoustical-Characteristics-of-Carpet.pdf (2018 technical bulletin; metric distinctions, no numerical results transferred).
- Yadav et al.: https://arxiv.org/abs/2305.01762 (43 occupied offices; observational design context, no performance promise).
- Interface reporting example: https://shop.interface.com/GB/en-GB/carpet-tile/works-effect/4311C.html (separate absorption and impact metrics; no competitor rating transferred).
- Alternative Flooring: https://www.alternativeflooring.com/carpets/naturals/sisal and https://www.alternativeflooring.com/help-advice/product-care (fibre identity and moisture/cleaning scope).
- Curran: https://www.curranfloor.com/rugs/sisal-tile and https://www.curranfloor.com/guides/care-and-cleaning (product-specific use and natural-fibre cleaning).
Content paraphrases limited source facts and provides original procurement tables and questions. No third-party images used. No product certifications, acoustics values, price or lead-time promises added.

## Original image provenance

Generated with the built-in imagegen tool, one independent prompt per asset. All six outputs visually reviewed. No labels or watermarks, realistic commercial scenes and material concepts. AI-generated concept captions are visible. Images do not represent supplied samples, completed projects or engineering tests. Website files preserve original 1672 × 941 resolution and use WebP encoding.

### office-open-plan

Published asset: `public/images/blog-series/open-plan-office-20261021/office-open-plan.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Wide architectural photograph of a contemporary open-plan office in daylight, desk clusters and realistic ergonomic chairs on charcoal and heather grey modular carpet tiles, discreet blue grey carpet accent defining circulation, timber and neutral furnishings, a few ceiling baffles and wall acoustic panels, realistic carpet tile seams and low pile texture. Carpet is the main visual subject in lower half. Eye-level 24mm lens, believable working office, polished but not extravagant.

### office-zoning

Published asset: `public/images/blog-series/open-plan-office-20261021/office-zoning.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Architectural detail photograph of a small meeting and lounge zone next to workstations in a modern open-plan office, neutral grey modular carpet with muted green carpet tile zoning, fabric seating and freestanding upholstered screens, a few ceiling acoustic baffles. Frame from floor level at a slight angle so carpet texture and change of colour are clear, daylight, realistic circulation and furniture. No claim of measured sound performance.

### office-material

Published asset: `public/images/blog-series/open-plan-office-20261021/office-material.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Close-up commercial material sample photograph on a light oak specification desk: three physical square low-pile loop carpet tile samples in heather grey, charcoal and muted blue, one sample tilted naturally to show its thin dark backing edge, actual dense fibres and modest realistic thickness. A blurred office plan sheet with no readable text and a simple ruler without readable numbers far in background. Focus on textile surface and real edge profile; no exploded diagram, no invented internal layers, no loose floating pieces.

### sisal-hotel

Published asset: `public/images/blog-series/natural-sisal-20261021/sisal-hotel.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Wide architectural interior photograph of a dry boutique hotel lounge, large natural sisal area carpet with a neat dark taupe bound edge under a low coffee table and lounge seating, warm cream walls, walnut accents, diffuse side daylight. Main foreground clearly shows the textured beige sisal woven carpet and visible finished border. Dry indoor seating area away from entrance, bathrooms and food service, no plants blocking carpet, understated high-end commercial interior.

### sisal-office

Published asset: `public/images/blog-series/natural-sisal-20261021/sisal-office.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Architectural photograph of a quiet dry office reception seating alcove, natural beige sisal carpet area with tidy bound edges underneath two upholstered chairs and a low table, reception desk farther away on separate hard flooring, calm daylight and timber wall panels, woven carpet prominent in foreground, realistic scale and material texture. The sisal is in a protected indoor lounge zone, not at a wet entrance or under rolling office chairs.

### sisal-texture

Published asset: `public/images/blog-series/natural-sisal-20261021/sisal-texture.webp`.

Prompt:

> Use case: photorealistic-natural. Asset: original high-resolution editorial concept image for a VCARPETS B2B procurement blog. Landscape 16:9, at least 1536 pixels wide. Real commercial architectural photography, natural texture, restrained colours, physically plausible materials and perspective, no CGI gloss. No text, no labels, no brands, no watermarks, no people. This illustrates a possible design, not a completed customer project or a certified product. Macro product-style photograph of three rectangular natural sisal woven carpet swatches on a matte neutral tabletop, different beige and wheat weave textures, one with a dark taupe textile bound edge and one with a matching linen-colour bound edge, realistic coarse plant fibres with slight natural variation, tightly framed tactile detail, side daylight, no decorative plants or props, no logos or tags. Show woven texture and edge finishing only; no certification or fibre-content labels.

## Validation and release record

Local implementation checks passed: ops:check (16 scoped files), production build and TypeScript, git diff --check, and six-asset/FAQ-content validation. ESLint completed with zero errors and one existing warning in unchanged src/components/ProductImage.tsx (line 43). No new warning. Both new posts have six visible FAQ answers identical to FAQ structured-data inputs, three distinct 1672 × 941 images, unique keywords and checked text-link anchors. Vercel Preview, mobile/layout, link and quote prefill verification, required PR checks, production deployment and IndexNow responses are still pending.
