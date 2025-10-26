# Trần Đức Thiện - Personal Portfolio & Academic Hub

[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-blue)](https://docusaurus.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator. It serves as a personal portfolio, blog, and academic documentation hub.

🌐 **Multi-language Support**: English & Vietnamese (English-Vietnamese)

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Internationalization](#-internationalization)
- [Course Materials](#-course-materials)

## ✨ Features

- **Personal Portfolio**: About me and professional information
- **Academic Hub**: Course materials and learning resources from HSU
- **Blog System**: Articles and thoughts
- **Multi-language**: Full English-Vietnamese support
- **Modern UI**: Clean, responsive design with dark mode
- **SEO Optimized**: Sitemap and meta tags for search engines
- **Math & Diagrams**: LaTeX math expressions and Mermaid diagrams support

## 📁 Project Structure

```
thiencode.github.io/
├── docs/                          # Documentation
│   ├── about/                     # Personal information
│   │   └── About-me.mdx          # About me page
│   ├── hsu/                       # HSU course materials
│   │   ├── SW206DL01-Algorithms-Analysis-and-Design/
│   │   │   ├── index.mdx         # Course overview
│   │   │   ├── week-1.md
│   │   │   └── week2-algorithm-complexity.mdx
│   │   └── IT206DL01-Object-Oriented-Analysis-and-Design/
│   │       ├── index.mdx         # Course overview
│   │       └── week1-intro-to-OOAD.mdx
│   ├── samples/                   # Docusaurus sample docs
│   │   ├── tutorial-basics/
│   │   └── tutorial-extras/
│   └── intro.md                   # Introduction page
├── i18n/                          # Internationalization
│   ├── en/                        # English translations
│   └── vi/                        # Vietnamese translations
├── blog/                          # Blog posts
├── src/                           # Source code
├── static/                        # Static assets
└── docusaurus.config.ts           # Site configuration
```

## 🚀 Installation

### Prerequisites

- Node.js 20.0 or higher
- pnpm (recommended) or npm/yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/thiencode/thiencode.github.io.git
cd thiencode.github.io

# Install dependencies
pnpm install

# Start development server
pnpm start
```

## 💻 Development

### Available Scripts

```bash
# Start development server (with hot reload)
pnpm start

# Build for production
pnpm build

# Serve the built site locally
pnpm serve

# Deploy to GitHub Pages
pnpm deploy

# Generate translation files
pnpm write-translations

# Clear build cache
pnpm clear
```

### Development Features

- **Hot Reload**: Changes are reflected instantly
- **TypeScript**: Full TypeScript support
- **ESLint**: Code linting and formatting
- **Multi-language**: Live language switching
- **Math Support**: LaTeX expressions via KaTeX
- **Diagrams**: Mermaid diagram support

## 🌐 Internationalization

This site supports English and Vietnamese languages. The i18n system is fully configured and ready for expansion.

### Adding New Languages

1. Update `docusaurus.config.ts` i18n configuration
2. Create language directory: `mkdir -p i18n/{lang-code}`
3. Add translation files following the structure in `i18n/README.md`

### Translation Files

- `i18n/{lang}/code.json` - General UI translations
- `i18n/{lang}/docusaurus-plugin-content-docs/` - Documentation translations

## 📚 Course Materials

### HSU Courses Structure

Each course follows a consistent structure:

```
docs/hsu/{COURSECODE}-{Course-Title}/
├── index.mdx              # Course overview
├── week1-topic.mdx        # Week 1 materials
├── week2-topic.mdx        # Week 2 materials
└── diagrams/              # Optional diagrams (.mmd, .puml)
```

### Adding New Courses

1. Create course directory: `docs/hsu/{COURSECODE}-{Course-Title}/`
2. Add `index.mdx` with course overview
3. Add weekly lesson files: `week{N}-{topic}.mdx`
4. Update `sidebars.ts` to include new course
5. Add translations in i18n files

### Supported Content Types

- **Markdown/MDX**: Rich text with React components
- **Math**: LaTeX expressions via remark-math + rehype-katex
- **Diagrams**: Mermaid flowcharts and diagrams
- **Code Blocks**: Syntax highlighting with live code editor
- **Interactive Elements**: Tabs, accordions, and more

## 🔧 Configuration

Key configuration files:

- `docusaurus.config.ts` - Main site configuration
- `sidebars.ts` - Navigation sidebar structure
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## 📖 Content Guidelines

### Frontmatter Format

All MDX files should include proper frontmatter:

```yaml
---
title: Page Title
sidebar_label: Sidebar Label
description: Page description for SEO
---
```

### Course Content Standards

- Use consistent naming: `week{N}-{descriptive-name}`
- Include learning objectives in each lesson
- Add code examples and diagrams where appropriate
- Provide references and further reading
- Use proper LaTeX for mathematical expressions

## 🌍 Build & Deployment

### Production Build

```bash
pnpm build
```

The build process generates:
- Static HTML/CSS/JS files
- Multi-language support
- Optimized assets
- Sitemap for SEO

### GitHub Pages Deployment

```bash
# Deploy using SSH (recommended)
USE_SSH=true pnpm deploy

# Or using personal access token
GIT_USER=<username> pnpm deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally: `pnpm start`
5. Build successfully: `pnpm build`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: [https://thiencode.github.io](https://thiencode.github.io)
- **Repository**: [https://github.com/thiencode/thiencode.github.io](https://github.com/thiencode/thiencode.github.io)
- **LinkedIn**: [Trần Đức Thiện](https://www.linkedin.com/in/thiện-trần-đức/)
- **Email**: thientranduc14@gmail.com

---

Built with ❤️ using [Docusaurus 3](https://docusaurus.io/)
