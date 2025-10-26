---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Internationalization (i18n)

This site supports multiple languages! 🌍

### Available Languages

- **English** (default) - `en`
- **Tiếng Việt** - `vi`

### Switching Languages

Use the **language dropdown** in the navbar (top-right corner) to switch between languages.

### How to Add Translations

#### 1. Generate translation files

```bash
pnpm run write-translations --locale vi
```

This command creates the necessary translation structure in `i18n/vi/`.

#### 2. Translate documentation content

To translate this page (`intro.md`) to Vietnamese:

**Step 1:** Create the directory structure
```bash
mkdir -p i18n/vi/docusaurus-plugin-content-docs/current
```

**Step 2:** Create the translated file
```bash
# Create: i18n/vi/docusaurus-plugin-content-docs/current/intro.md
```

**Step 3:** Copy the content and translate it to Vietnamese

#### 3. Test your translations

```bash
# Run with Vietnamese locale
pnpm start --locale vi

# Or run with all locales
pnpm start
```

Visit:
- English: `http://localhost:3000/docs/intro`
- Vietnamese: `http://localhost:3000/vi/docs/intro`

#### 4. Translation Structure

```
i18n/
├── en/                    # English translations
│   └── code.json         # UI elements
└── vi/                    # Vietnamese translations
    ├── code.json         # UI elements (navbar, footer, etc.)
    └── docusaurus-plugin-content-docs/
        └── current/      # Translated docs
            └── intro.md  # This file in Vietnamese
```

### What to Translate

✅ **Translate:**
- Headings and content
- Descriptions and explanations
- UI text in `code.json`
- Sidebar labels in `current.json`

❌ **Don't translate:**
- Frontmatter keys (`sidebar_position`, `title`)
- Code blocks
- URLs and links
- Package names (`docusaurus`, `node.js`)
- Command line commands

### Learn More

For detailed information about i18n in Docusaurus:
- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- Check `i18n/README.md` in this project for specific guidelines
