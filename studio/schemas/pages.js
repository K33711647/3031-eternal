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
    {
      name: "pageBuilder",
      type: "array",
      title: "Page modules",
      of: [
        { type: "pageModuleImage" },
        { type: "pageModuleSectionTitle" },
        { type: "pageModuleLargeText" },
        { type: "pageModuleAccordion" },
        { type: "pageModulePaq" },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
    },
  },
};
