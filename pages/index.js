import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Logo from "../components/logo";
import Layout from "../components/layout";
import { projectIndexQuery, splashScreenIndexQuery } from "../library/queries";
import { getClient, overlayDrafts } from "../library/sanity.server";
import { useState } from "react";

export default function Index({ ...pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Eternal</title>
        </Head>
        <Container>
          <Logo />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(
    await getClient(preview).fetch(projectIndexQuery)
  );
  const splashScreen = overlayDrafts(
    await getClient(preview).fetch(splashScreenIndexQuery)
  );
  return {
    props: { allProjects, splashScreen, preview },
  };
}
