import ContactUs from "@/components/contact-us";
import MainLayout from "@/layout/main-layout";
import Head from "next/head";
import React, { ReactElement } from "react";

function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Sina Sae</title>
      </Head>
      <ContactUs />
    </>
  );
}
ContactUsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default ContactUsPage;
