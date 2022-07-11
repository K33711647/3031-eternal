export default {
  name: "pageModuleLargeText",
  type: "object",
  title: "Large Text",
  fields: [
    {
      name: "largeText",
      type: "text",
      title: "Text",
    },
    {
      title: "Set Background",
      name: "background",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "white", value: "white", initialValue: true },
          { title: "black", value: "black" },
          { title: "blue", value: "blue" },
          { title: "limegreen", value: "limegreen" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "largeText",
    },
  },
};
