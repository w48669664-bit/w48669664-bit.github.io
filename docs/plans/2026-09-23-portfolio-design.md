# Personal portfolio

Audience: recruiters and collaborators interested in AI applications and data science.
Direction: restrained contemporary creative portfolio, light cool neutrals, cobalt accent, Manrope with system Chinese sans, generous spacing. DESIGN_VARIANCE 7 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3. Native CSS token system; rounded media 20px, controls pills, content grouped with rules. Semantic layers: header 20, dialog 50.

Flow: introduction → real project screenshots on the left with evidence-based descriptions on the right → additional project explorations → AI application skills → experience and education → awards → email contact.

Implementation: Vite/React static export for GitHub Pages, relative asset URLs, no backend or API keys. Data resides in src/content.js. Native dialog for project details and image/video viewing, reduced-motion support, persistent/system theme, mobile navigation. Real project screenshots; never publish private account screenshots. Resume supplied by user is downloadable; contact uses supplied email.

Validation: production build, desktop/mobile screenshot inspection, keyboard dialogs/navigation, asset and link checks, dark/reduced-motion checks and Lighthouse. Publish to a new public GitHub repository with GitHub Actions Pages deployment after validation. Explicit user request authorizes GitHub publication.
