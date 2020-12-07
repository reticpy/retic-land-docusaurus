module.exports = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/requirements",
        "getting-started/virtual-environments",
        "getting-started/installation",
        "getting-started/first-steps",
      ],
    },
    {
      type: "category",
      label: "Tutorial",
      collapsed: true,
      items: [
        "tutorial/set-up",
        "tutorial/app",
        "tutorial/routing",
        "tutorial/controllers",
        "tutorial/services",
        "tutorial/settings",
        "tutorial/external-apps",
      ],
    },
    {
      type: "category",
      label: "Main Concepts",
      collapsed: true,
      items: [
        "concepts/architecture",
        "concepts/routing",
        "concepts/controllers",
        "concepts/services",
        "concepts/settings",
        "concepts/app",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: true,
      items: [
        "api/request",
        "api/response",
        "api/next",
        "api/middlewares",
        "api/services",
      ],
    },    
    "glossary",
  ],
};
