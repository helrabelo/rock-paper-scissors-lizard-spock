import React, { useState, useEffect } from 'react';

import styles from './statisticsWrapper.less';

import Container from '../Container';
import Button from '../Button';

const StatisticsWrapper = ({ games }) => {
  console.log(games);
  
  return (
    <Container className={styles.statisticsWrapper}>
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
        <div className={styles.resetAll}>
          <button>Reset Statistics</button>
        </div>
    </Container>
  );
};

export default StatisticsWrapper;
