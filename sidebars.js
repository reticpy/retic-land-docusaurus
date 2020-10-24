module.exports = {
  docs: [
    "es/introduction",
    {
      type: "category",
      label: "Primeros pasos",
      collapsed: false,
      items: [
        "es/getting-started/requirements",
        "es/getting-started/virtual-environments",
        "es/getting-started/installation",
        "es/getting-started/first-steps",
      ],
    },
    {
      type: "category",
      label: "Tutorial",
      collapsed: true,
      items: [
        "es/tutorial/set-up",
        "es/tutorial/app",
        "es/tutorial/routing",
        "es/tutorial/controllers",
        "es/tutorial/services",
        "es/tutorial/settings",
        "es/tutorial/external-apps",
      ],
    },
    {
      type: "category",
      label: "Conceptos principales",
      collapsed: true,
      items: [
        "es/concepts/architecture",
        "es/concepts/routing",
        "es/concepts/controllers",
        "es/concepts/services",
        "es/concepts/settings",
        "es/concepts/app",
      ],
    },
    {
      type: "category",
      label: "Referencia de la API",
      collapsed: true,
      items: [
        "es/api/request",
        "es/api/response",
        "es/api/next",
        "es/api/middlewares",
        "es/api/services",
      ],
    },    
    "es/glossary",
  ],
};
