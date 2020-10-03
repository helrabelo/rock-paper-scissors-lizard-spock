import {gameOptions} from '../constants/GameOptions';
import { capitalize } from './StringManipulation';

// Returns a random number between 1-5
export function getComputerChoice() {
  return capitalize(gameOptions[generateRandomNumberFromRange()].option.toString());
}



function generateRandomNumberFromRange(){
  return Math.floor(Math.random() * 5);
}

