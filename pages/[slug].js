import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Container from "../components/container";
import Layout from "../components/layout";

import { pageSlugsQuery, pageQuery } from "../library/queries";
import { urlForImage, usePreviewSubscription } from "../library/sanity";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../library/sanity.server";

import SectionTitle from "../components/page/sectionTitle.js";
import SingleImage from "../components/page/singleImage.js";
import LargeText from "../components/page/largeText.js";
import Accordion from "../components/page/accordion.js";
import Paq from "../components/page/paq.js";

export default function Page({ preview, data = {} }) {
  const router = useRouter();
  const slug = data?.pages?.page?.slug;
  const pageTitle = data?.pages?.page?.pageTitle;

  const {
    data: { page },
  } = usePreviewSubscription(pageQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const PageBuilder = () => {
    if (!data | !data?.pages?.page?.pageBuilder) return <></>;
    const modules = data?.pages?.page?.pageBuilder;
    const moduleContent = modules.map((content, index) => {
      if (content._type == "pageModuleSectionTitle") {
        return (
          <SectionTitle
            key={index}
            title={content.sectionTitle}
            color={content.background}
          />
        );
      } else if (content._type == "pageModuleImage") {
        return <SingleImage key={index} content={content} />;
      } else if (content._type == "pageModuleLargeText") {
        return <LargeText key={index} content={content} />;
      } else if (content._type == "pageModuleAccordion") {
        return <Accordion key={index} content={content} />;
      } else if (content._type == "pageModulePaq") {
        return <Paq key={index} content={content} />;
      }
    });
    return <>{moduleContent}</>;
  };

  return (
    <>
      <Layout>
        <Head>
          <title>PAQ</title>
        </Head>
        <Container>
          <div className="mt-32 block"></div>
          <PageBuilder />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const pages = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      // key: params.slug,
      data: {
        pages,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(pageSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
