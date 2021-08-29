import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class LongThreadsDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A simple todo list app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://unpkg.com/sanitize.css/evergreen.css"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LongThreadsDocument;
