export default {
  name: "projectModuleImages",
  type: "object",
  title: "Images",
  fields: [
    {
      title: "Title (hidden)",
      name: "title",
      type: "string",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
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
      ],
      options: {
        layout: "grid",
      },
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
          { title: "Square", value: "rounded-none", initialValue: true },
        ],
      },
    },
    {
      title: "Grid",
      name: "grid",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "1", value: "grid-cols-1", initialValue: true },
          { title: "2", value: "grid-cols-2" },
          { title: "3", value: "grid-cols-3" },
          { title: "4", value: "grid-cols-4" },
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
      title: "title",
      media: "image",
    },
  },
};
