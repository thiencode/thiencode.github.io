import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Trần Đức Thiện',
  tagline: 'Personal Portfolio & Blog',
  favicon: 'img/briefcase.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://thiencode.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thiencode', // Usually your GitHub org/user name.
  projectName: 'thiencode.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
    },
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  
  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      { trackingID: 'G-KLZ4M8G8G1', anonymizeIP: true },
    ],
  ],

  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thiencode/thiencode.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thiencode/thiencode.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Trần Đức Thiện',
      logo: {
        alt: 'Trần Đức Thiện Logo',
        src: 'https://avatars.githubusercontent.com/thiencode',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/thiencode/thiencode.github.io',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/about/About-me',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/thi%E1%BB%87n-tr%E1%BA%A7n-%C4%91%E1%BB%A9c-635084210/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/thiencode',
            },
            {
              label: 'Email',
              href: 'mailto:thientranduc14@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Documentation',
              to: '/docs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trần Đức Thiện. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
