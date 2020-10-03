import React, { useState, useEffect } from 'react';

import styles from './optioncard.less';

const OptionCard = ({ userChoice, gameStatus }) => {
  return (
    <div className={styles.optionCardWrapper}>
      <div
        className={`${styles.optionCard} ${
          gameStatus
            ? gameStatus === 'W'
              ? styles.success
              : gameStatus === 'L'
              ? styles.danger
              : gameStatus === 'T'
              ? styles.neutral
              : styles.error
            : styles.error
        }`}
      >
        <h1>Here we should have and Image</h1>
        <p>The user choice is: {userChoice}</p>
        <p>The game status is: {gameStatus}</p>
      </div>
    </div>
  );
};

export default OptionCard;
