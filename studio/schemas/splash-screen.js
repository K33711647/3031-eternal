export default {
  name: "splashScreen",
  type: "document",
  title: "Splash Screen Content",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Stickers",
      };
    },
  },
};
