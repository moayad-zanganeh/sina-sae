import Musics from '@/components/music';
import MainLayout from '@/layout/main-layout';
import React, { ReactElement } from 'react';

function MusicPage() {
  return <Musics />;
}
MusicPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default MusicPage;
