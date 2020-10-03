import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './index.less';

export default function Home() {
  return (
    // GAME WRAPPER
    <div className={styles.gameWrapper}>
      <Head>
        <title>Rock  Paper Scissors Spock Lizard</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* MAIN BLOCK */}
      <div className={`${styles.container} ${styles.mainGame}`}>
        {/* RESULT */}
        <div className={styles.cardItems}>
          <div className={styles.item}>
            <p>User choice</p>
          </div>
          <div className={styles.item}>
            <p>Computer choice</p>
          </div>
        </div>

        <div className={styles.result}>
          <p>Result</p>
        </div>

        {/* ACTIONS */}
        <div className={styles.userChoices}>
          <button>Rock</button>
          <button>Paper</button>
          <button>Scissors</button>
          <button>Spock</button>
          <button>Lizard</button>
        </div>
      </div>

      {/* GENERAL SCORE / OPTIONS */}
      <div className={styles.container}>
        <div className={styles.statistics}>
          <div>
            <p>Games played: </p>
            <h3>443</h3>
          </div>
          <div>
            <p>Games won: </p>
            <h3>223</h3>
          </div>
          <div>
            <p>Games won with Spock: </p>
            <h3>123</h3>
          </div>
          <div>
            <p>Games lost to Lizard: </p>
            <h3>50</h3>
          </div>
        </div>
        <div>
          <button>Reset Statistics</button>
        </div>
      </div>

      {/* FOOTER */}
    </div>
  );
}
