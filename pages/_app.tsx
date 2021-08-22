import React from "react";
import "../src/styles/globals.css";
import type { AppProps } from "next/app";

function LongThreadsApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default LongThreadsApp;
