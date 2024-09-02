import AboutUs from '@/components/about-us';
import MainLayout from '@/layout/main-layout';
import React, { ReactElement } from 'react';

function AboutPage() {
  return <AboutUs />;
}
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default AboutPage;
