import React from 'react';
import Head from 'next/head';
import { fonts, colors } from '../styles';

export default () => (
  <header>
    <Head>
      <link  />
      <style>{`
        body {
          margin: 0;
          font-family: ${fonts.secondary};
          line-height: 1.5;
        }

        @font-face {
          font-family: Lora;
          src: url('/static/fonts/Lora-Bold.ttf');
        }

        @font-face {
          font-family: Slabo;
          src: url('/static/fonts/Slabo27px-Regular.ttf');
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${fonts.primary};
          margin-top: 0.5em;
          margin-bottom: 0.2em;
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }
      `}</style>
    </Head>
  </header>
);