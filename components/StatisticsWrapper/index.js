import React, { useState, useEffect } from 'react';

import styles from './statisticsWrapper.less';

import Container from '../Container';
import Button from '../Button';
import History from '../StatisticsHistory';

const StatisticsWrapper = ({ games, resetStatistics }) => {
  let gamesPlayed = games;
  let totalGames = games.length;
  let gamesWon = gamesPlayed.filter((game) => game.result === 'W').length;
  let gamesWonWithSpock = gamesPlayed.filter((game) => game.result === 'W' && game.user === 'spock').length;
  let gamesLostToLizard = gamesPlayed.filter((game) => game.result === 'L' && game.computer === 'lizard').length;


  return (
    <>
      <Container className={styles.statisticsWrapper}>
        <div className={styles.statistics}>
          <div>
            <p>Games played: </p>
            <h3>{totalGames}</h3>
          </div>
          <div>
            <p>Games won: </p>
            <h3>{gamesWon}</h3>
          </div>
          <div>
            <p>Games won with Spock: </p>
            <h3>{gamesWonWithSpock }</h3>
          </div>
          <div>
            <p>Games lost to Lizard: </p>
            <h3>{gamesLostToLizard}</h3>
          </div>
        </div>
        <div className={styles.resetAll}>
          <Button onClick={resetStatistics}>Reset Statistics</Button>
        </div>
      </Container>
      <Container className={styles.statisticsHistory}>
        <History games={games} />
      </Container>
    </>
  );
};

export default StatisticsWrapper;
