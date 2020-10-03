import React, { useState, useEffect } from 'react';

import { gameOptions } from '../../constants/GameOptions';
import { capitalize } from '../../helpers/StringManipulation';

import Button from '../Button';

import styles from './gameoptions.less';

const GameOptions = ({handleChoice}) => {
  return (
    <div className={styles.gameOptions}>
      {gameOptions.map((option) => {
        return (
          <>
            <Button
              key={option.option}
              onClick={handleChoice(option.option)}
              classes={styles.chooseButton}
              primary
            >
              {capitalize(option.option)}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default GameOptions;