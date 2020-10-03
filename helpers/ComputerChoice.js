import {gameOptions} from '../constants/GameOptions';

// return random choice 
export function getComputerChoice() {
  return gameOptions[generateRandomNumberFromRange()].option.toString();
}



// Returns a random number between 1-5
function generateRandomNumberFromRange(){
  return Math.floor(Math.random() * 5);
}

