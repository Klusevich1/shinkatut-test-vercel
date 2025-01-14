import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="gLOwPvxqhx8hnPZ0WI0g8R-Klts_A_4tapFsKbl1mh8"
        />
        <meta name="yandex-verification" content="d43f05a6c816b873" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
