module.exports = {
  title: "Retic",
  tagline: "Retic is a framework for Python.",
  url: "https://retic.land",
  baseUrl: "/",
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
          to: "manual/es/introduction",
          activeBasePath: "docs",
          label: "Manual",
          position: "right",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/reticpy/retic",
          label: "GitHub",
          position: "right",
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
              label: "Installation",
              to: "manual/es/getting-started/installation",
            },
            {
              label: "Getting Started",
              to: "manual/es/getting-started/requirements",
            },
            {
              label: "Tutorial",
              to: "manual/es/tutorial/set-up",
            },
            {
              label: "Main Concepts",
              to: "manual/es/concepts/architecture",
            },
            {
              label: "API Reference",
              to: "manual/es/api/request",
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
          routeBasePath: "manual",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/reticpy/retic-land-docusaurus/edit/master/",
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
