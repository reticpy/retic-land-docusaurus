const versions = require("./versions.json");

// This probably only makes sense for the alpha phase, temporary
function getNextAlphaVersionName() {
  const lastReleasedVersion = versions[0];

  return `${lastReleasedVersion}`;
}

const isDev = process.env.NODE_ENV === "development";

const isDeployPreview =
  process.env.NETLIFY && process.env.CONTEXT === "deploy-preview";

const baseUrl = process.env.BASE_URL || "/";

const isVersioningDisabled = !!process.env.DISABLE_VERSIONING;

module.exports = {
  title: "Retic",
  tagline: "Retic is a framework for Python.",
  url: "https://retic.land",
  baseUrl,
  onBrokenLinks: "throw",
  favicon: "img/favic.ico",
  organizationName: "Staimer", // Usually your GitHub org/user name.
  projectName: "retic", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Retic",
      // logo: {
      //   alt: "Retic",
      //   src: "img/retic-logo2.jpg",
      // },
      items: [
        {
          type: "doc",
          position: "right",
          docId: "introduction",
          label: "Manual",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            // {
            //   to: "/versions",
            //   label: "All versions",
            // },
          ],
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/reticpy/retic",
          label: "GitHub",
          position: "right",
        },
      ],
      // algolia: {
      //   apiKey: "aa4b8c2c737f3fa0829c959e550a0968",
      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section bellow
      //   contextualSearch: true,

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "manual/getting-started/installation",
            },
            {
              label: "Getting Started",
              to: "manual/getting-started/requirements",
            },
            {
              label: "Tutorial",
              to: "manual/tutorial/set-up",
            },
            {
              label: "Main Concepts",
              to: "manual/concepts/architecture",
            },
            {
              label: "API Reference",
              to: "manual/api/request",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Github",
            //   href: "https://github.com/reticpy/retic",
            // },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/reticpy/retic",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // routeBasePath: '/',
          // path: "docs",
          routeBasePath: "manual",

          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/reticpy/retic-land-docusaurus/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // remarkPlugins: [
          //   [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          // ],
          disableVersioning: isVersioningDisabled,
          lastVersion: "current",
          onlyIncludeVersions:
            !isVersioningDisabled && (isDev || isDeployPreview)
              ? ["current", ...versions.slice(1, 2)]
              : undefined,
          versions: {
            current: {
              label: `${getNextAlphaVersionName()}`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
