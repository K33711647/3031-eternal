export default {
  name: "pageModuleImage",
  type: "object",
  title: "Image",
  fields: [
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
      media: "image",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: "Image",
        media: media,
      };
    },
  },
};
