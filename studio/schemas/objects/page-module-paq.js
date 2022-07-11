export default {
  name: "pageModulePaq",
  type: "object",
  title: "PAQ",
  initialValue: () => ({
    background: "white",
  }),
  fields: [
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
    prepare() {
      return {
        title: "PAQ",
      };
    },
  },
};
