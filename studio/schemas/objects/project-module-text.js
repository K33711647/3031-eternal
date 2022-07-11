export default {
  name: "projectModuleText",
  type: "object",
  title: "Text",
  fields: [
    {
      title: "Title (hidden)",
      name: "titleHidden",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Text position",
      name: "textPosition",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "Left", value: "order-first", initialValue: true },
          { title: "Right", value: "order-last" },
        ],
      },
    },
    {
      name: "image",
      title: "Image (optional)",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      title: "Set Image Style",
      name: "imageStyle",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          {
            title: "Rounded corners",
            value: "rounded-3xl",
          },
          { title: "Oval", value: "rounded-oval" },
          { title: "square", value: "rounded-none", initialValue: true },
        ],
      },
    },
    {
      title: "Image position",
      name: "imagePosition",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "Left", value: "order-first", initialValue: true },
          { title: "Right", value: "order-last" },
        ],
      },
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
      title: "titleHidden",
    },
  },
};
