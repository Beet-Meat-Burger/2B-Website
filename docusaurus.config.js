// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '最新消息',
  tagline: '明天 16:00 放學。 明天有運動課，請帶備運動服回來更換。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://class2b-6h3a.onrender.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '3B Website',
        logo: {
          alt: 'My Site Logo',
          src: 'img/3B.svg',
        },
        items: [
          {to: '/docs/homework', label: 'Homework List', position: 'left'},
          {to: '/docs/downloads', label: 'Download Center', position: 'left'},
          
          {
            href: 'https://github.dev/Beet-Meat-Burger/2B-Website',
            label: 'Edit Page',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `3B website, built by Steven in 2B last year, recoded to 3B by Heison, updated by Kelvin and Heison. Powered by Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
