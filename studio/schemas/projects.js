import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  name: "projects",
  type: "document",
  title: "Projects Content",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "projects" }),
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
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
      name: "video",
      title: "YouTube ID",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
