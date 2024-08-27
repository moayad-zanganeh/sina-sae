import { ReactElement } from 'react';
import MainLayout from '@/layout/main-layout';
import MainHome from '@/components/home';

export default function Home() {
  return <MainHome />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
