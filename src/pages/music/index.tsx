import Musics from "@/components/music";
import MainLayout from "@/layout/main-layout";
import Head from "next/head";
import React, { ReactElement } from "react";

function MusicPage() {
  return (
    <>
      <Head>
        <title>Sina Sae</title>
      </Head>
      <Musics />
    </>
  );
}
MusicPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default MusicPage;
