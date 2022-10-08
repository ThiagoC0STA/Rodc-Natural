import {
  Header,
  Footer,
  Cart,
  Wishes,
  News,
  Login,
} from "../components/E__exports";
import Head from "next/head";
import { GlobalContext } from "../contexts/Contexts";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rodc Natural Produts</title>
        <meta
          name="description"
          content="RN the best natural products website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalContext>
        <Header />
        <Component {...pageProps} />
        <News />
        <Cart />
        <Login />
        <Wishes />
        <Footer />
      </GlobalContext>
    </>
  );
}

export default MyApp;
