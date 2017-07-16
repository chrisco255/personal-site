import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { fonts, colors } from '../styles';

export default () => (
  <header>
    <Head profile="http://www.w3.org/2005/10/profile">
      <title>ChrisCo</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon"
            type="image/ico"
            href="/static/favicon.ico" />
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
          color: ${colors.primary};
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        a {
          color: ${colors.secondary};
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Head>
    <div className="nav-container">
      <div className="nav-header">
        <img className="logo" src="/static/images/mario.svg" />
        <p>It's-a me, ChrisCo!</p>
        <div className="nav-links-container">
          <p className="nav-links">Showcase | <Link href="/about"><a>About</a></Link> | Blog</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .nav-base {
        height: 4px;
        background: ${colors.complementary};
      }
      .nav-links-container {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .nav-links {
        margin: 0 16px;
        font-size: 24px;
        line-height: 64px;
      }
      .logo {
        height: 48px;
        margin: 0 8px;
      }
      .nav-header {
        display: flex;
        height: 64px;
        width: 100%;
        align-items: center;
      }
      h1 {
        margin: 0;
        font-family: ${fonts.primary};
      }

      @media only screen and (max-width: 500px) {
        .nav-header {
          flex-direction: column;
          height: auto;
        }
        .logo {
          margin: 8px;
        }
        .nav-links {
          line-height: 32px;
        }
        p {
          font-size: 16px;
          margin: 4px;
        }
      }
    `}</style>
  </header>
);