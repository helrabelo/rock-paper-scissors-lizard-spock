import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './index.less';

import { gameOptions } from '../constants/GameOptions';

import { capitalize } from '../helpers/StringManipulation';
import { getComputerChoice } from '../helpers/ComputerChoice';
import { calculateResult } from '../helpers/CalculateResult';

import Container from '../components/Container';
import Button from '../components/Button';
import GamePanel from '../components/GamePanel';
import Statistics from '../components/StatisticsWrapper';

export default function Home() {
  // States
  const [games, setGame] = useState([]);

  const [currentGame, setCurrentGame] = useState({});

  const [userChoice, setUserChoice] = useState(null);

  const [computerChoice, setComputerChoice] = useState(null);

  // Handlers
  const handleChoice = (option) => () => {
    setUserChoice(option);
    setComputerChoice(getComputerChoice());
  };

  const handleResetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setCurrentGame({ result: null });
  };

  const handleSetLastGame = (game) => {
    setCurrentGame(game);
  };

  const handleSubmitChoice = () => {
    let result = calculateResult(userChoice, computerChoice);

    setCurrentGame({
      ...currentGame,
      result,
    });

    setGame([...games, { user: userChoice, computer: computerChoice, result }]);
  };

  const handleResetStatistics = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setCurrentGame({ result: null });
    setGame([]);
  };

  useEffect(() => {
    setCurrentGame({
      ...currentGame,
      user: userChoice,
      computer: computerChoice,
    });
  }, [userChoice]);

  return (
    // GAME WRAPPER
    <div className={styles.gameWrapper}>
      <Head>
        <title>Rock Paper Scissors Spock Lizard</title>
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
      <GamePanel
        handleChoice={handleChoice}
        handleResetGame={handleResetGame}
        currentGame={currentGame}
        handleSubmitChoice={handleSubmitChoice}
      />

      {/* GENERAL SCORE / OPTIONS */}
      <Statistics games={games} resetStatistics={handleResetStatistics} />
    </div>
  );
}
