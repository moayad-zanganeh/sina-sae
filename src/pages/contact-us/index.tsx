import ContactUs from '@/components/contact-us';
import MainLayout from '@/layout/main-layout';
import React, { ReactElement } from 'react';

function ContactUsPage() {
  return <ContactUs />;
}
ContactUsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default ContactUsPage;
