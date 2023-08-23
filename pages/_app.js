import Head from "next/head";

import Layout from "./../components/layout/Layout";

import "../styles/globals.css";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>next js udemy course</title>
        <meta
          name="description"
          content="Add your oun meetup and create amazing networking opportunities."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
