// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yoop Documentation",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yoop-docs.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yoop", // Usually your GitHub org/user name.
  projectName: "yoop", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Yoop Cloud",
        logo: {
          alt: "Yoop Docusaurus",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "Yoop Organization",
                href: "https://github.com/orgs/Yoop-Platform/repositories",
              },
              {
                label: "Yoop Board",
                href: "https://github.com/orgs/Yoop-Platform/projects/1",
              },
              {
                label: "Yoop Documentation Repository",
                href: "https://github.com/Yoop-Platform/yoop-documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Catalin Iuga, Rares Chiuzbaian, Eduard Podolac, Norbert Kovacs, Madalina Pode, Gabriel Muresan.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
