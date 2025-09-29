import AboutUs from '@/components/about-us';
import MainLayout from '@/layout/main-layout';
import Head from 'next/head';
import React, { ReactElement } from 'react';

function AboutPage() {
  return (
    <>
    <Head>
        <title>Sina Sae</title>
      </Head>
    <AboutUs />
    </>
  ) ;
}
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default AboutPage;
