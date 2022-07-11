import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import MenuOverlay from "../components/menuOverlay";
import Work from "../components/work";
import Splash from "../components/splash";
import Layout from "../components/layout";
import { projectIndexQuery, splashScreenIndexQuery } from "../library/queries";
import { getClient, overlayDrafts } from "../library/sanity.server";
import { useState } from "react";

export default function Index({ allProjects, splashScreen, ...pageProps }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [splashOpen, setSplashOpen] = useState(false);
  const [imageRatio, setImageRatio] = useState("");
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      <Layout>
        <Head>
          <title>PAQ</title>
        </Head>
        <Container>
          <Splash
            splashScreen={splashScreen}
            splashOpen={splashOpen}
            setSplashOpen={setSplashOpen}
          />
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
