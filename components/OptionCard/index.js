import React, { useState, useEffect } from 'react';

import styles from './optioncard.less';

import { gameResults } from '../../constants/GameResults';

const OptionCard = ({ type, userChoice, gameStatus }) => {
  const resultClasses = () =>
    gameResults.filter((game) =>
      gameStatus ? game.game === gameStatus : 'Neutral'
    );

  const [userCard, setUserCard] = useState(styles.neutral);

  const [computerCard, setComputerCard] = useState(styles.neutral);

  useEffect(() => {
    let result = resultClasses();
    setUserCard(result[0].user);
    setComputerCard(result[0].computer);
  }, [gameStatus]);

  return (
    <div className={styles.optionCardWrapper}>
      <div
        className={
          styles.optionCard +
          ' ' +
          (type === 'user' ? userCard : gameStatus ? computerCard : '')
        }
      >
        <p>
          {type === 'user'
            ? userChoice
              ? `The user choice is: ${userChoice}`
              : 'Please select an option below'
            : gameStatus
            ? `computer choice is: ${userChoice}`
            : `Please confirm your choice to see computer's`}
        </p>
        <h1>Here we should have and Image</h1>
        {type === 'user' ? (
          <p>
            {gameStatus
              ? `The game status is: ${gameStatus}`
              : `Please confirm your choice to see the result`}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default OptionCard;
