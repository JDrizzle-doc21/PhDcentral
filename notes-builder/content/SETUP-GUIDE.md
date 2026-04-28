# Obsidian + Quartz Setup Guide
## Connecting your vault to jdrizzle-doc21.github.io/PhDcentral/notes

---

## What you're building

```
Your Mac (Obsidian vault)
        ↓  sync folder
GitHub repo: PhDcentral/
  ├── index.html          ← your existing site
  ├── dashboard.html      ← your existing dashboard
  └── notes/              ← NEW: Quartz knowledge base
        ├── index.html
        └── (all public notes rendered as web pages)
```

---

## Part 1 — Install Obsidian and set up your vault

### Step 1: Download Obsidian
1. Go to https://obsidian.md and download for Mac
2. Open Obsidian → "Open folder as vault"
3. Create a new folder called `PhDVault` somewhere on your Mac (e.g. `~/Documents/PhDVault`)
4. Select that folder

### Step 2: Copy your vault files
The vault folder structure has been prepared for you. Copy the following into your `PhDVault` folder:
- `Home.md`
- `00-Dashboard/` (and its contents)
- `_templates/` (and its contents)
- `01-Research-Notes/`
- `02-Paper-Summaries/`
- `03-Progress-Logs/`
- `04-Concepts/`
- `05-Conferences/`
- `.obsidian/` (hidden folder — contains settings)

> **Tip**: To see hidden folders on Mac, press `Cmd + Shift + .` in Finder.

### Step 3: Configure templates in Obsidian
1. In Obsidian: Settings (gear icon) → Core plugins → Enable "Templates"
2. Settings → Templates → Template folder location: `_templates`
3. Set hotkey: Settings → Hotkeys → search "Templates: Insert template" → assign `Cmd+T`

### Step 4: Using templates
- Create a new note in the correct folder
- Press `Cmd+T` → choose the template
- Fill in the frontmatter fields at the top

---

## Part 2 — Set up Quartz

### Step 1: Install Node.js (if not already installed)
1. Go to https://nodejs.org and download the LTS version
2. Install it — this takes about 2 minutes
3. Open Terminal (Applications → Utilities → Terminal)
4. Verify: type `node --version` → should show a version number

### Step 2: Clone your existing GitHub repo
```bash
# In Terminal:
cd ~/Documents
git clone https://github.com/jdrizzle-doc21/PhDcentral.git
cd PhDcentral
```

### Step 3: Set up Quartz inside your repo
```bash
# Still in Terminal, inside the PhDcentral folder:

# Download Quartz
git clone https://github.com/jackyzha0/quartz.git notes-builder
cd notes-builder
npm install

# Copy the config file you were given into this folder
# (copy quartz.config.ts into notes-builder/)
```

### Step 4: Link your Obsidian vault to Quartz
```bash
# This tells Quartz where your vault lives
# Replace the path below with the actual path to your vault

# On Mac, if your vault is at ~/Documents/PhDVault:
npx quartz create --source ~/Documents/PhDVault
```

When prompted:
- "What would you like to link your content folder to?" → Choose "Copy"
- This copies only the notes with `publish: true` into Quartz

### Step 5: Test it locally
```bash
npx quartz build --serve
```
Open your browser and go to `http://localhost:8080`
You should see your notes rendered as a website. ✅

---

## Part 3 — Deploy to GitHub Pages

### Step 1: Create a GitHub Actions workflow
In your `PhDcentral` repo, create this file at `.github/workflows/deploy-notes.yml`:

```yaml
name: Deploy Notes

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Build Quartz
        run: |
          cd notes-builder
          npm install
          npx quartz build --output ../notes

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
          keep_files: true
```

### Step 2: Push everything to GitHub
```bash
# From the PhDcentral folder:
git add .
git commit -m "Add Quartz notes system"
git push
```

### Step 3: Check it's live
- Go to https://github.com/jdrizzle-doc21/PhDcentral → Actions tab
- Wait for the green tick (takes ~2 minutes)
- Visit: https://jdrizzle-doc21.github.io/PhDcentral/notes

---

## Part 4 — Linking your website to Obsidian notes

### How to link from index.html or dashboard.html into a specific note

Any published note becomes a URL automatically. The pattern is:

```
https://jdrizzle-doc21.github.io/PhDcentral/notes/[folder]/[note-name]
```

**Examples:**
| Note location in vault | Public URL |
|------------------------|-----------|
| `00-Dashboard/PhD Dashboard.md` | `/notes/00-Dashboard/PhD-Dashboard` |
| `04-Concepts/Intratumoural Microbiome.md` | `/notes/04-Concepts/Intratumoural-Microbiome` |
| `02-Paper-Summaries/Smith 2023.md` | `/notes/02-Paper-Summaries/Smith-2023` |

### Adding a "Research Notes" link to your existing site
In `index.html`, add this anywhere in your navigation:

```html
<a href="/PhDcentral/notes" class="nav-link">
  Research Notes
</a>
```

Or add a card linking to a specific concept:

```html
<a href="/PhDcentral/notes/04-Concepts/Intratumoural-Microbiome" 
   style="text-decoration: none;">
  <div class="card">
    <h3>What is the intratumoural microbiome?</h3>
    <p>Read my notes on the core concept underpinning this PhD →</p>
  </div>
</a>
```

---

## Part 5 — Daily workflow

### Writing a new paper summary
1. Open Obsidian
2. Navigate to `02-Paper-Summaries/`
3. New note (`Cmd+N`) → name it "Author Year - Title"
4. Insert template (`Cmd+T`) → "Paper Summary"
5. Fill it in
6. If you want it public: change `publish: false` to `publish: true` in frontmatter
7. When ready to push: run `npx quartz sync` in Terminal

### Quick publish command (run this whenever you want to update the site)
```bash
cd ~/Documents/PhDcentral/notes-builder
npx quartz sync
```
This builds and pushes to GitHub in one step. Live in ~2 minutes.

---

## Troubleshooting

**"Note isn't appearing on the site"**
- Check frontmatter has `publish: true` (lowercase, no spaces)
- Run `npx quartz sync` again
- Check GitHub Actions tab for errors

**"Links between notes are broken"**
- Make sure both notes have `publish: true`
- Quartz only renders links between published notes

**"The site looks different from my main site"**
- The `quartz.config.ts` file uses your existing navy/teal palette
- You can tweak the `colors` section to fine-tune

---

## Publishing rules summary

| Note type | Publish by default? | Reasoning |
|-----------|--------------------|----|
| Progress logs | ❌ No | Personal / supervisor-facing only |
| Paper summaries | ✅ Your choice | Great for readers, shows engagement |
| Research notes | ✅ Your choice | Share methodology openly |
| Concepts | ✅ Yes | Highest value for readers |
| Conferences | ✅ Yes | Shows activity and presence |
| Dashboard | ✅ Yes | Public-facing PhD overview |
