import React, { useState, useEffect } from 'react';

import styles from './optioncard.less';

import { gameResults } from '../../constants/GameResults';

const OptionCard = ({ type, userChoice, gameStatus }) => {
  const resultClasses = () =>
    gameResults.filter((game) => gameStatus ? (game.game === gameStatus) : 'N');

  const [userCard, setUserCard] = useState(styles.neutral);

  const [computerCard, setComputerCard] = useState(styles.neutral);

  useEffect(() => {
    let result = resultClasses();
    setUserCard(result[0].user);
    setComputerCard(result[0].computer);
    console.log('gameStatus changed');
    console.log('result classes: ', resultClasses());
    console.log('user card: ', userCard);
    console.log('computer card: ', computerCard);
  }, [gameStatus]);

  return (
    <div className={styles.optionCardWrapper}>
      <div
        className={
          styles.optionCard + ' ' + (type === 'user' ? userCard : computerCard)
        }
      >
        <p>The {type === 'user' ? 'user' : 'computer'} choice is: {userChoice}</p>
        <h1>Here we should have and Image</h1>
        <p>The game status is: {gameStatus ? gameStatus : 'not played yet'}</p>
      </div>
    </div>
  );
};

export default OptionCard;
