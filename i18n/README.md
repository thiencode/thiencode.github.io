# Internationalization (i18n) Setup

This project supports both English and Vietnamese languages using Docusaurus i18n.

## Supported Locales

- **English** (en) - Default locale
- **Vietnamese** (vi) - Secondary locale

## File Structure

```
i18n/
├── en/                          # English translations
│   ├── code.json               # General translations (navbar, footer, etc.)
│   └── docusaurus-plugin-content-docs/
│       ├── current.json        # Current docs translations
│       └── version-1.0.0.json  # Version-specific translations
└── vi/                          # Vietnamese translations
    ├── code.json               # General translations (navbar, footer, etc.)
    └── docusaurus-plugin-content-docs/
        ├── current.json        # Current docs translations
        └── version-1.0.0.json  # Version-specific translations
```

## Translation Structure

All translation files follow this structure:

```json
{
  "key": {
    "message": "Translated text",
    "description": "Context description for translators"
  }
}
```

### Required Translation Keys

**General translations (code.json):**
- `title`: Site title
- `tagline`: Site tagline
- `navbar.*`: Navigation bar elements
- `footer.*`: Footer elements
- `sidebar.*`: Sidebar categories

**Documentation translations (docusaurus-plugin-content-docs):**
- `version.label`: Version labels
- `sidebar.docs.category.*`: Sidebar category names

## Adding New Translations

### 1. General Translations (code.json)

Add translations for UI elements like navbar, footer, sidebar categories:

```json
{
  "navbar.documentation": "Documentation",
  "footer.copyright": "Copyright © {year} Trần Đức Thiện. Built with Docusaurus."
}
```

### 2. Documentation Translations

For docs translations, create corresponding `.md` files in localized folders:

```
docs/
├── intro.md                    # English version
└── i18n/
    ├── vi/
    │   └── docusaurus-plugin-content-docs/
    │       └── current/
    │           └── docs/
    │               └── intro.md  # Vietnamese version
    └── en/
        └── docusaurus-plugin-content-docs/
            └── current/
                └── docs/
                    └── intro.md  # English version (if different)
```

## Switching Languages

Users can switch languages using the language dropdown in the navbar. The selected language will be saved in localStorage and applied across the entire site.

## Adding New Languages

To add a new language:

1. Update `docusaurus.config.ts` i18n configuration:
```ts
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'vi', 'fr'], // Add new locale
  localeConfigs: {
    // ... existing configs
    fr: {
      label: 'Français',
      direction: 'ltr',
    },
  },
},
```

2. Create new language directory:
```bash
mkdir -p i18n/fr/code.json
mkdir -p i18n/fr/docusaurus-plugin-content-docs
```

3. Add translations following the same structure as existing languages.

## Translation Workflow

1. **Extract strings**: Use `npm run write-translations` to extract translatable strings
2. **Translate**: Update the JSON files with translations
3. **Test**: Use `npm start` to test the translations
4. **Deploy**: The translations will be automatically included in the build

## Best Practices

1. **Consistent naming**: Use descriptive keys in translation files
2. **Context information**: Add comments for translators to understand context
3. **Pluralization**: Use proper plural forms where applicable
4. **Date/Number formatting**: Consider locale-specific formatting needs
5. **Testing**: Test all translations thoroughly before deployment

## Resources

- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- [ISO Language Codes](https://www.w3.org/International/O-charset-lang.html)
