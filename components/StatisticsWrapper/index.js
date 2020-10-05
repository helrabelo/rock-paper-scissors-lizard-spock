import React, { useState, useEffect } from 'react';

import styles from './statisticsWrapper.less';

import Container from '../Container';
import Button from '../Button';
import History from '../StatisticsHistory';
import StatisticsCard from '../StatisticsCard';

const StatisticsWrapper = ({ games, resetStatistics }) => {
  let gamesPlayed = games;
  let totalGames = games.length;
  let gamesWon = gamesPlayed.filter((game) => game.result === 'Win').length;
  let gamesWonWithSpock = gamesPlayed.filter(
    (game) => game.result === 'Win' && game.user === 'spock'
  ).length;
  let gamesLostToLizard = gamesPlayed.filter(
    (game) => game.result === 'Loss' && game.computer === 'lizard'
  ).length;

  return (
    <>
      <Container className={styles.statisticsWrapper}>
        <h3>Statistics</h3>
        <div className={styles.statistics}>
          <StatisticsCard title={'Games played:'} value={totalGames} />
          <StatisticsCard title={'Games won:'} value={gamesWon} />
          <StatisticsCard
            title={'Games won with Spock:'}
            value={gamesWonWithSpock}
          />
          <StatisticsCard
            title={'Games lost to Lizard:'}
            value={gamesLostToLizard}
          />
          <div className={styles.resetAll}>
            <Button disabled={totalGames === 0} classes={styles.resetButton} onClick={resetStatistics}>Reset Statistics</Button>
          </div>
        </div>
      </Container>
      {totalGames > 0 ? (
        <Container className={styles.statisticsHistory}>
          <h3>History</h3>
          <History games={games} />
        </Container>
      ) : null}
    </>
  );
};

export default StatisticsWrapper;
