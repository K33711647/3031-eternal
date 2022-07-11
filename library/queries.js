// Projects

const projectFields = `
  _id,
  id,
  client,
  image,
  ratio,
  projectBuilder,
  "slug": slug.current,
`;

export const projectIndexQuery = `
*[_type == "projects"] | order(orderRank) {
  ${projectFields}
}`;

export const projectQuery = `
{
  "project": *[_type == "projects" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
}`;

export const projectSlugsQuery = `
*[_type == "projects" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = `
*[_type == "projects" && slug.current == $slug][0] {
  ${projectFields}
}
`;

// Pages

const pageFields = `
  _id,
  pageTitle,
  pageBuilder,
  "slug": slug.current,
`;

export const pageIndexQuery = `
*[_type == "pages"] | order(orderRank) {
  ${pageFields}
}`;

export const pageQuery = `
{
  "page": *[_type == "pages" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${pageFields}
  },
}`;

export const pageSlugsQuery = `
*[_type == "pages" && defined(slug.current)][].slug.current
`;

export const pageBySlugQuery = `
*[_type == "pages" && slug.current == $slug][0] {
  ${pageFields}
}
`;

// Splash Screen

const splashScreenFields = `
  _id,
  images
`;

export const splashScreenIndexQuery = `
*[_type == 'splashScreen'] {
  ${splashScreenFields}
}`;
