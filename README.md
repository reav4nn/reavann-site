Project: Reavann Parallax Site (static)

Overview
- Converted from PHP to a static site (HTML/CSS/JS) without changing the visual design, layout, or content.
- Cleaned extension-injected markup, fixed encoding, and organized assets.
- Preserves GSAP parallax layers, Lenis smooth scroll, and content fade-in.

Structure
- css/
  - 23333.css (variables/reset from Osmo)
  - style.css (parallax component styles)
- js/
  - gsap.min.js
  - ScrollTrigger.min.js
  - lenis.min.js
  - main.js (parallax setup + content fade + Lenis loop)
- images/
  - 6717..._osmo-parallax-layer-*.webp (parallax layers)
- .well-known/ (left untouched for certificate validation)
- index.html (homepage)

Notes
- Index is fully static; no PHP required.
- Scripts are loaded with `defer` for performance; order is important: GSAP → ScrollTrigger → Lenis → main.js.
- Decorative parallax images use empty `alt` and `aria-hidden` to improve accessibility.

Local preview
- Open `index.html` directly or serve with a simple static server.
  - Python: `python -m http.server 8080`
  - Node (if installed): `npx http-server -p 8080`

Deploy
- Upload everything as-is to your static hosting.
- Keep `.well-known/` if you manage certificates via HTTP validation.

Future tweaks (optional)
- Add Cloudflare Web Analytics if desired.
- Form actions can use `mailto:` or a drop-in service like Formspree.

License & Usage
- © 2025 Reavann — All Rights Reserved.
- No reuse, copying, or redistribution without explicit permission from the owner.
- Public deployment is allowed only for reavann.xyz by the owner.
