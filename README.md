# Sweet Crumbs Bakery & Mithai

A responsive multipage HTML template for a bakery, traditional sweet shop and celebration-gifting business.

## Pages

- Home 1 and gifting-focused Home 2
- Products with client-side category filters
- Festive Gift Boxes
- Bulk Orders with enquiry form and FAQ
- Contact / Custom Orders with map and FAQ
- 404 and Coming Soon

## Use

Open `pages/index.html` directly, or serve the project root with any static web server. All page assets use paths relative to the `pages` directory.

## Customisation

- Colours and spacing: edit variables at the top of `assets/css/style.css`.
- Fonts: change `--font-head` and `--font-body`. Local font files can be placed in `assets/fonts`.
- Images: replace files under `assets/images` and retain meaningful `alt` text.
- Forms: add a Formspree `action` or Netlify form attributes at the comments in the forms.
- Map: replace the iframe URL in `pages/contact.html` with your Google Maps embed URL.
- Dark mode: `main.js` respects the system setting and persists the visitor's choice.
- RTL: set `<html dir="rtl">`; `rtl.css` handles directional adjustments.

## Structure

Shared CSS is separated into base, responsive, dark-mode and RTL files. Shared UI behavior lives in `main.js`; validation lives in `form-validation.js`.

## Credits and support

Demo photography was generated specifically for this template. Replace this section with marketplace credits and your support address before distribution.

Supports current Chrome, Edge, Firefox and Safari.
