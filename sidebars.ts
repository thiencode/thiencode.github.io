import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'About & Portfolio',
      items: ['about/About-me'],
    },
    {
      type: 'category',
      label: 'HSU',
      items: [
        {
          type: 'category',
          label: 'SW206DL01 - Algorithms Analysis and Design',
          items: [
            'hsu/SW206DL01-Algorithms-Analysis-and-Design/index',
            'hsu/SW206DL01-Algorithms-Analysis-and-Design/week1-introduction',
            'hsu/SW206DL01-Algorithms-Analysis-and-Design/week2-algorithm-complexity',
          ],
        },
        {
          type: 'category',
          label: 'IT206DL01 - Object-oriented Analysis & Design',
          items: [
            'hsu/IT206DL01-Object-Oriented-Analysis-and-Design/index',
            'hsu/IT206DL01-Object-Oriented-Analysis-and-Design/week1-intro-to-OOAD',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Samples (Docusaurus Docs)',
      items: [
        'samples/diagrams-demo',
        'samples/tutorial-basics/create-a-page',
        'samples/tutorial-basics/create-a-document',
        'samples/tutorial-basics/deploy-your-site',
        'samples/tutorial-extras/manage-docs-versions',
      ],
    },
  ],
};

export default sidebars;
