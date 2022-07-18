import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { projectIndexQuery } from "../../library/queries";
import { getClient, overlayDrafts } from "../../library/sanity.server";
import { useState } from "react";

export default function Index({ allProjects, ...pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>PAQ</title>
        </Head>
        <Container></Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(
    await getClient(preview).fetch(projectIndexQuery)
  );
  return {
    props: { allProjects, preview },
  };
}
