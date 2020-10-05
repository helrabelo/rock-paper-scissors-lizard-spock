import React, { useState, useEffect } from 'react';

import Container from '../Container';
import Button from '../Button';

import OptionCard from '../OptionCard';
import GameOptions from '../GameOptions';

import styles from './gamepanel.less';

const GamePanel = ({
  handleChoice,
  handleResetGame,
  handleSubmitChoice,
  currentGame,
}) => {
  return (
    <Container className={styles.mainGame}>
      {/* MAIN GAME SCREEN - RESULT */}
      <div className={styles.optionsWrapper}>
        <OptionCard
          type={'user'}
          userChoice={currentGame.user}
          gameStatus={currentGame.result}
        />
        <OptionCard
          type={'computer'}
          userChoice={currentGame.computer}
          gameStatus={currentGame.result}
        />
      </div>

      <div className={styles.controlWrapper}>
        {/* ACTIONS */}

        <GameOptions handleChoice={handleChoice} disabled={currentGame.result}/>

        <div className={styles.gameControl}>
          <Button
            onClick={handleSubmitChoice}
            disabled={!currentGame.user || currentGame.result}
            classes={styles.confirm}
          >
            Confirm Choice
          </Button>

          <Button
            onClick={handleResetGame}
            classes={styles.resetGame}
            alert
            disabled={!currentGame.result}
          >
            Reset Game
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default GamePanel;
