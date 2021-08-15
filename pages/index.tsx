import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Long Threads</title>
        <meta name="description" content="A simple todo list app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/sanitize.css/evergreen.css" rel="stylesheet" />
      </Head>

      <Main>
        <h1>
          Long Threads
        </h1>

        Test
      </Main>
    </>
  );
}
