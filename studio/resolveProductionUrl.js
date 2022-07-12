const previewSecret = "sdfght234ertergwfd"; // Copy the string you used for SANITY_PREVIEW_SECRET
// const projectUrl = "http://localhost:3000";

const projectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://3031-eternal.vercel.app";

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
