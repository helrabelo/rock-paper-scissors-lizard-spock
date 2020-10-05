import React, { useState, useEffect } from 'react';

import { gameOptions } from '../../constants/GameOptions';
import { capitalize } from '../../helpers/StringManipulation';

import Button from '../Button';

import styles from './gameoptions.less';

const GameOptions = ({handleChoice, disabled}) => {
  return (
    <div className={styles.gameOptions}>
      {gameOptions.map((option, index) => {
        return (
          <>
            <Button
              key={`${index}-${option.option}`}
              onClick={handleChoice(option.option.toString())}
              classes={styles.chooseButton}
              disabled={disabled}
              primary
            >
              {capitalize(option.option).toString()}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default GameOptions;