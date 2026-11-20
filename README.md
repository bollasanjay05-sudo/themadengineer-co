# THE MAD ENGINEER & CO. — Editorial Storefront V4

A responsive, green-and-white custom merchandise storefront built on V3. Product images are original illustrative mockups rather than third-party photographs. Pricing is by quotation, not invented retail prices.

## Files

- `index.html` — full editable storefront, catalog and ordering UI
- `styles.css` — V3 category slider, collection and checkout styling
- `script.js` — 105 product/design listings, choices, cart, WhatsApp quote flow
- `experience.css` — redesigned forest-green/white header, seven-slide editorial hero and ThreeUI integration styling
- `experience.js` — hero slider, collection navigation and optional exact ThreeUI source loader
- `setup_threeui.py` — downloads the **author's exact HTML source**, verifies the required SHA-256, stores an original copy and generates a personalized green-themed adaptation
- `run_local.py` — launches a local HTTP server
- `index-single-file.html` — portable self-contained version of the storefront (without the optional external ThreeUI source; the on-page fallback appears)
- `assets/` — editorial renders, existing 105 collection mockups, favicon and transparent logo; `reference-only` are stills from your uploaded reel and are **not** for reuse as product photographs.

## First steps

1. Open `script.js` and enter your real WhatsApp business number in `STORE.whatsappNumber`, using digits and country code with no `+`, spaces or punctuation.
2. For offline navigation and shopping, open `index-single-file.html` directly. If you need the optional 3D shelf, use the source-file version with a local server instead.
3. For the **exact authored ThreeUI shelf**, while connected to the Internet, run:
   ```bash
   python setup_threeui.py
   python run_local.py
   ```
   Then visit `http://localhost:8000` in a browser. The script downloads `public/landing-pages/complete-shelf-v2.html` from `MengTo/threeui` and **only accepts SHA-256 `606f200fed8602c243f40a11c8c364f0e625c57f80e7c97dc76419da207f198e`**. It saves an unchanged original to `threeui/complete-shelf-v2.original.html` and edits only book titles, textual descriptions and surface colors in `threeui/complete-shelf-custom.html`. Scene structure, shaders, controls, artwork atlases, Three.js r165 imports and animation remain the author's implementation; the visuals remain books/idea volumes, not physically modeled product frames.
4. To host the exact shelf with your site, upload the generated `threeui/` folder as well as the original source files and `assets/`. Note ThreeUI imports `three@0.165.0` from jsDelivr, so Internet is needed for that experience. The rest of the storefront is standalone.

## Customer journey

The green editorial hero auto-advances through seven categories, with manual prev/next and bottom category-slider controls. "Explore this collection" selects the matching category in the existing four-level catalog: category → type → named collection → individual item. Customers can choose design style, variations, quantities, dates for events and personalization notes, then add items to a persistent cart and compose a WhatsApp quote request. The site doesn't take payment, upload artwork to any server, or guarantee pricing/availability.

## Visual inspiration and licensing

- VELORIA-style editorial reference was supplied as a screenshot by the customer, but this design was independently composed.
- The Souled Store and LEON.CO were provided as **style and product-range references only**. No third-party product photographs were copied or hotlinked.
- The provided Instagram reel features branded superhero merchandise and serves only as inspiration. References extracted from the reel are kept in `assets/reference-only/` and **not displayed as sale listings**. Third-party character artwork and trademarks may require a commercial license.
- Original editorial merchandise photography collage generated specifically for this site, plus V3 mockups.
- The optional exact ThreeUI Complete Shelf implementation is by **Meng To / ThreeUI**, used as a dependency under its stated MIT license; see https://github.com/MengTo/threeui and https://catalogs.dev/mengto/items/complete-shelf-landing-page. Attribution appreciated.

## Website details you should customize

- Replace custom product sample artwork with actual production samples before launch.
- Add your final WhatsApp business number and contact details.
- Verify available print processes, sizes, materials, prices, delivery cities, minimum quantities and event photo booth capability.
- For real product photo upload / preview before sending cart, add a backend or WhatsApp media workflow. This prototype sends text details and users share images after starting the conversation.
- The official ThreeUI scene is designed around **seven book-shaped volumes**. To display genuine photo frames, tumblers and other 3D geometries, additional authorized model assets and custom Three.js geometry/UV mapping are required; this project doesn't pretend the original shelf is a 3D product configurator.

## React / TSX version (exact configured ThreeUI usage)

`threeui-react/Scene.tsx` contains the specified `CompleteShelfLandingPage` import and **all the exact prop values** supplied in the brief. In a React/Vite/Next application, install `@designcodeio/threeui` and copy the generated `landing-pages/` folder into the app public directory so `/landing-pages/complete-shelf-v2.html` resolves. The standalone HTML storefront uses the same authored HTML source directly in an iframe after installation, because the main storefront does not require React.
