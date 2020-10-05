import { gameOptions } from '../constants/GameOptions';

export function calculateResult(userChoice, computerChoice) {
  if (!userChoice || !computerChoice) return 'E';
  if (userChoice.toString() === computerChoice.toString()) return 'T';

  let options = gameOptions;

  let option = options.filter((option) => userChoice === option.option);

  return option[0].beats.includes(computerChoice) ? 'W' : 'L';
}
