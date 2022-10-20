import Head from "next/head";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";
import ShopMain from "../components/Shop/ShopMain";

export default function Shop() {
  return (
    <>
      <Head>
        <title>
          Eduman - Education And Online Courses React, NextJs Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ShopMain />
      <Footer />
    </>
  );
}
