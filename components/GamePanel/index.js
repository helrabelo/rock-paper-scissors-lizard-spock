import React, { useState, useEffect } from 'react';

import Container from '../Container';
import Button from '../Button';

import OptionCard from '../OptionCard';
import GameOptions from '../GameOptions';

import { gameOptions } from '../../constants/GameOptions';
import { capitalize } from '../../helpers/StringManipulation';
import { calculateResult } from '../../helpers/CalculateResult';

import styles from './gamepanel.less';

const GamePanel = ({
  userChoice,
  computerChoice,
  handleChoice,
  handleResetGame,
  handleSubmitChoice,
  currentGame
}) => {

  return (
    <Container className={styles.mainGame}>
      {/* MAIN GAME SCREEN - RESULT */}
      <div className={styles.optionsWrapper}>
        <OptionCard userChoice={currentGame.user} gameStatus={currentGame.result} />
        <OptionCard userChoice={currentGame.computer} gameStatus={currentGame.result} />
      </div>

      <div className={styles.controlWrapper}>
        {/* ACTIONS */}

        <GameOptions handleChoice={handleChoice} />

        <div className={styles.result}>
          <div className={styles.buttons}>
            <Button onClick={handleSubmitChoice} classes={styles.chooseButton}>
              Confirm Choice
            </Button>

            <p>Result</p>
          </div>
          <Button onClick={handleResetGame} classes={styles.chooseButton} alert={true}>
            Reset choice
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default GamePanel;
