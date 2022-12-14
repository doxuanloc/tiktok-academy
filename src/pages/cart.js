import Head from "next/head";
import CartMain from "../components/Cart/CartMain";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";

export default function Cart() {
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
      <CartMain />
      <Footer />
    </>
  );
}
