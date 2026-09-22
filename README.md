# Lyu Research Group Website

Static website prepared for GitHub Pages.

## Publish from GitHub

1. Create a public repository.
2. For a root site, name it `<YOUR_GITHUB_USERNAME>.github.io`.
3. Upload all files in this folder to the repository root. `index.html` must be at the root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch **main**, folder **/(root)**, then **Save**.
7. Your site will be available at `https://<YOUR_GITHUB_USERNAME>.github.io/` after publishing.

If the repository uses another name such as `lyu-lab`, the default URL will be:
`https://<YOUR_GITHUB_USERNAME>.github.io/lyu-lab/`.

The `.nojekyll` file tells GitHub Pages to serve the static files directly without Jekyll processing.
