import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  name: "pages",
  type: "document",
  title: "Pages Content",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "pages" }),
    {
      name: "pageTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageTitle",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
    },
  },
};
