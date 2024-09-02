import MainBar from '@/components/home/main-bar';
import MainLayout from '@/layout/main-layout';
import React, { ReactElement } from 'react';

function HomePage() {
  return <MainBar />;
}
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default HomePage;
