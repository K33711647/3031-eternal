import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { useNextSanityImage } from "next-sanity-image";

import Container from "../../components/container";
import Layout from "../../components/layout";

import {
  projectSlugsQuery,
  projectQuery,
  projectIndexQuery,
} from "../../library/queries";
import { urlForImage, usePreviewSubscription } from "../../library/sanity";
import { sanityConfig } from "../../library/config";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../../library/sanity.server";

export default function Project({ preview, data = {}, allProjects }) {
  const router = useRouter();
  const slug = data?.projects?.project?.slug;
  const projectTitle = data?.projects?.project?.title;
  const projectDescription = data?.projects?.project?.description;
  const {
    data: { project },
  } = usePreviewSubscription(projectQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  // var index = allProjects.indexOf(slug);
  // var nextItem;
  // if (index >= 0 && index < array.length - 1) nextItem = array[index + 1];

  const index = allProjects?.findIndex((object) => {
    // console.log(allProjects.length);
    const projectsLength = allProjects.length + 1;
    let currentIndex = () => {
      return object.slug === slug;
    };
    if ((currentIndex = projectsLength)) {
      currentIndex = 0;
    }
    // return currentIndex;
    console.log(allProjects[currentIndex].slug);
  });

  // ;
  // console.log(allProjects);
  // console.log(nextItem);

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const FeaturedImage = () => {
    const imageProps = useNextSanityImage(
      sanityConfig,
      data?.projects?.project?.image
    );
    return <Image {...imageProps} layout="responsive" objectFit="contain" />;
  };

  const ProjectBuilder = () => {
    return (
      <>
        <div className="flex h-full min-h-screen w-full items-center justify-center  text-center">
          <div className="p-10">
            <FeaturedImage />
            <h1 className="pt-10 pb-5 text-4xl text-white">{projectTitle}</h1>
            <p className="text-white">{projectDescription}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{projectTitle} - Eternal</title>
        </Head>
        <Container>
          <ProjectBuilder />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const projects = await getClient(preview).fetch(projectQuery, {
    slug: params.slug,
  });

  const allProjects = overlayDrafts(
    await getClient(preview).fetch(projectIndexQuery)
  );

  return {
    props: {
      preview,
      data: {
        projects,
      },
      allProjects,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
