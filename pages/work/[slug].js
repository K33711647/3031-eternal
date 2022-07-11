import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { useNextSanityImage } from "next-sanity-image";

import Container from "../../components/container";
import Layout from "../../components/layout";
import SectionImages from "../../components/project/sectionImages";
import SectionVideo from "../../components/project/sectionVideo";
import SectionText from "../../components/project/sectionText";

import { projectSlugsQuery, projectQuery } from "../../library/queries";
import { urlForImage, usePreviewSubscription } from "../../library/sanity";
import { sanityConfig } from "../../library/config";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../../library/sanity.server";

export default function Project({ preview, data = {} }) {
  const router = useRouter();
  const slug = data?.projects?.project?.slug;
  const projectClient = data?.projects?.project?.client;
  const {
    data: { project },
  } = usePreviewSubscription(projectQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const FeaturedImage = () => {
    const imageProps = useNextSanityImage(
      sanityConfig,
      data.projects.project.image
    );
    return (
      <Image
        {...imageProps}
        className="object-fill"
        layout="fill"
        objectFit="cover"
      />
    );
  };

  const ProjectBuilder = () => {
    if (!data | !data?.projects?.project?.projectBuilder) return <></>;
    const modules = data?.projects?.project?.projectBuilder;
    const moduleContent = modules.map((content, index) => {
      if (content._type == "projectModuleImages") {
        return <SectionImages key={index} content={content} />;
      } else if (content._type == "projectModuleVideo") {
        return <SectionVideo key={index} content={content} />;
      } else if (content._type == "projectModuleText") {
        return <SectionText key={index} content={content} />;
      }
    });
    return (
      <>
        <div className="m-auto h-full h-screen overflow-hidden md:pb-16">
          <FeaturedImage />
        </div>
        {moduleContent}
      </>
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{projectClient} - PAQ</title>
        </Head>
        <Container>
          {/*<div className="mt-24 block md:mt-32"></div>*/}
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

  return {
    props: {
      preview,
      data: {
        projects,
      },
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
