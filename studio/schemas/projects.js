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
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "client",
      },
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
      title: "Set Image Ratio",
      name: "ratio",
      type: "string",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "100%", value: "100%", initialValue: true },
          { title: "80%", value: "80%" },
          { title: "75%", value: "75%" },
          { title: "50%", value: "50%" },
          { title: "25%", value: "25%" },
        ],
      },
    },
    {
      name: "projectBuilder",
      type: "array",
      title: "Project modules",
      of: [
        { type: "projectModuleImages" },
        { type: "projectModuleVideo" },
        { type: "projectModuleText" },
      ],
    },
  ],
  preview: {
    select: {
      title: "client",
      // subtitle: "client",
    },
  },
};
