import { gameOptions } from '../constants/GameOptions';

export function calculateResult(userChoice, computerChoice) {
  if (!userChoice || !computerChoice) return 'Error';
  if (userChoice.toString() === computerChoice.toString()) return 'Tie';

  let options = gameOptions;

  let option = options.filter((option) => userChoice === option.option);

  return option[0].beats.includes(computerChoice) ? 'Win' : 'Loss';
}
