# Aaditya Pandhare — Advanced Data Engineer Portfolio

## Run locally
1. Extract this ZIP.
2. Open the extracted folder in Visual Studio Code.
3. Open `index.html`.
4. Start Live Server (or open `index.html` in Chrome).

## Personalize before publishing
In `index.html`, replace:
- `YOUR_EMAIL@example.com` with your public contact email.
- `YOUR-LINKEDIN` with your LinkedIn profile path.
- `YOUR-GITHUB` with your GitHub username.
- Project repository links with the correct repository URLs.
- Skill labels/descriptions so they accurately reflect your current ability.

## Add your certificates
1. Put each certificate PDF in the `certificates` folder.
2. Use these filenames or update the matching `href` in `index.html`:
   - `python-certificate.pdf`
   - `data-science-certificate.pdf`
   - `excel-certificate.pdf`
3. Search for `CERTIFICATE 01` in `index.html` to find the certificate carousel.
4. Edit the title, description, tags and PDF link for each slide.
5. To add another certificate, copy one complete `<article class="cert-slide"> ... </article>` inside the `cert-track` element, then update its details and link. The carousel creates navigation dots automatically.

The certificate carousel advances every 3 seconds, has previous/next controls, and can be paused/resumed. It pauses while the visitor hovers over or focuses the certificate panel.

## Publish with GitHub Pages
1. Create a repository named `yourusername.github.io`.
2. Upload all files and folders, keeping the structure intact.
3. In Settings → Pages, deploy from the `main` branch and `/ (root)`.
4. Your site will publish at `https://yourusername.github.io`.

This is a static website. The email button opens the visitor's email app; there is no backend contact form.
