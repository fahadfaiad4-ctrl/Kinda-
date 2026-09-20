# Kinda-
Kinda Logistics — internal tools and documents

## Website

A multi-page, bilingual (English + Arabic) corporate website for **KINDA for Logistics
and Oil Services** (كندة للوجستيات والخدمات النفطية), rebuilt from the real content and
brand assets of kinda-log.com — real logo, real colors (`#356797` blue / `#E02F23` red),
real photos, and real partner/certification info.

### Structure

- English site (root): `index.html`, `about.html`, `services.html`, `certifications.html`, `contact.html`
- Arabic site (`/ar/`): mirrors every English page, full RTL layout
- `assets/css/style.css` — shared styling
- `assets/js/script.js` — mobile nav, scroll reveal, contact form validation
- `assets/images/` — real logo, hero photo, service photos, partner logos (BP, Shell, South Oil Company)
- `sitemap.xml` / `robots.txt` — SEO scaffolding with hreflang EN/AR alternates

### Content covers both company divisions

- **Logistics Profile**: international/local shipping, customs clearance, general transport
- **Oil Services Profile**: EPC & procurement, construction, mechanical services, equipment/machinery supply, industrial supply
- Company values (Environment, Safety, One Team, Respect for Work), Managing Director message, and ISO 9001 / 14001 / 45001 certifications

To preview locally, just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (English) or `http://localhost:8080/ar/` (Arabic).
