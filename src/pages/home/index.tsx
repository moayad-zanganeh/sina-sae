import Head from 'next/head';
import MainBar from '@/components/home/main-bar';
import MainLayout from '@/layout/main-layout';
import { ReactElement } from 'react';

function HomePage({ posts }: { posts: any }) {
  return (
    <>
      <Head>
        <title>Sina Sae</title>
      </Head>
      <MainBar />
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
