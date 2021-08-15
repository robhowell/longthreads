import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { blue, darkGrey } from '~/styles/colors';
import { spacing5, spacing17 } from '~/styles/spacing';

const Main = styled.main`
  color: ${darkGrey};
  margin: 0 auto;
  max-width: ${spacing17};
  padding: ${spacing5};
`;

const PageTitle = styled.h1`
  color: ${blue};
  font-size: 1.5rem;
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
        <PageTitle>
          Long Threads
        </PageTitle>

        Test
      </Main>
    </>
  );
}
