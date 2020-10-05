import React, { useState } from 'react';

import styles from './statisticshistory.less';

import Container from '../Container';

import { gameResults } from '../../constants/GameResults';

const History = ({ games }) => {

  return (
    <Container className={styles.historyWrapper}>
      {games.map((game, index) => {

        let gameResultClasses = gameResults.filter((gameResult) => (game.result ? gameResult.game === game.result : 'Neutral')); 

        let backGroundColor = gameResultClasses[0].user;

        console.log(gameResultClasses);
        console.log(backGroundColor);

        return (
          <div className={styles.game + ' ' + backGroundColor} key={index}>
            <h3>{game.user}</h3>
            <span>{game.result}</span>
            <h3>{game.computer}</h3>
          </div>
        );
      })}
    </Container>
  );
};

export default History;
