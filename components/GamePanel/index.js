import React, { useState, useEffect } from 'react';

import Container from '../Container';
import Button from '../Button';

import OptionCard from '../OptionCard';
import GameOptions from '../GameOptions';

import { gameOptions } from '../../constants/GameOptions';
import { capitalize } from '../../helpers/StringManipulation';

import styles from './gamepanel.less';

const GamePanel = ({userChoice, computerChoice, handleChoice, handleNewGame}) => {
  return (
    <Container className={styles.mainGame}>
      {/* MAIN GAME SCREEN - RESULT */}
      <OptionCard userChoice={userChoice} gameStatus={'W'}/>

      <div className={styles.cardItems}>
        <div className={styles.item}>
          <p>User choice: {userChoice}</p>
        </div>
        <div className={styles.item}>
          <p>Computer choice: {computerChoice}</p>
        </div>
      </div>

      <div className={styles.controlWrapper}>
        {/* ACTIONS */}
        
        <GameOptions handleChoice={handleChoice} />

        <div className={styles.result}>
          <div className={styles.buttons}>
            <Button onClick={handleNewGame} classes={styles.chooseButton}>
              Confirm Choice
            </Button>

            <p>Result</p>
          </div>
          <Button onClick={handleNewGame} classes={styles.chooseButton} alert>
            Reset choice
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default GamePanel;
