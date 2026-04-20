# Deploying Ajay Kumar's Portfolio to GitHub Pages

This project is a React + Vite portfolio site. Follow the steps below to deploy it to GitHub Pages for free hosting.

## Step 1: Push to GitHub

1. Go to [github.com](https://github.com) and create a new **public** repository.
   - For a personal URL like `ajay6034.github.io`, name the repo exactly: `ajay6034.github.io`
   - For any other URL like `ajay6034.github.io/portfolio`, name it anything (e.g. `portfolio`)

2. Push this entire project to that repository (all files, not just the portfolio folder).

## Step 2: Enable GitHub Pages via Actions

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Click **Save**.

## Step 3: Trigger the workflow

The workflow runs automatically whenever you push to `main`. You can also trigger it manually:

1. Go to your repo's **Actions** tab.
2. Click **Deploy Portfolio to GitHub Pages** in the left panel.
3. Click **Run workflow** → **Run workflow**.

## Step 4: Visit your live site

After the workflow completes (~2 minutes), your portfolio will be live at:

- **Personal repo** (`ajay6034.github.io`): `https://ajay6034.github.io`
- **Project repo** (`portfolio`): `https://ajay6034.github.io/portfolio`

> **Note:** If you use a project repo, update `BASE_PATH` in `.github/workflows/deploy-portfolio.yml` from `/` to `/<your-repo-name>/` — for example `/portfolio/`.

## File Structure

The portfolio source code lives in `artifacts/portfolio/`. Key files:

```
artifacts/portfolio/
  src/
    components/     # All page sections (hero, about, skills, etc.)
    pages/          # home.tsx and projects-page.tsx
    index.css       # Theme and global styles
  public/           # Static assets (favicon, 404.html for SPA routing)
  index.html        # App entry point
  vite.config.ts    # Build configuration
  package.json      # Dependencies
attached_assets/    # Your profile photo (referenced in hero.tsx)
.github/
  workflows/
    deploy-portfolio.yml  # GitHub Actions deployment workflow
```

## Making Changes

Edit any file in `artifacts/portfolio/src/` and push to `main`. The GitHub Action will automatically rebuild and redeploy.
