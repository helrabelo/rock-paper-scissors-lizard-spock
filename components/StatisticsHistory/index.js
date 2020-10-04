import React from 'react';

import styles from './statisticshistory.less';

import Container from '../Container';

const History = ({ games }) => {
  return (
    <Container className={styles.historyWrapper}>
      {games.map((game, index) => {
        return (
          <div className={styles.game} key={index}>
            <p>{game.user}</p>
            <p>{game.computer}</p>
            <p>{game.result}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default History;
