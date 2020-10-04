import { gameOptions } from '../constants/GameOptions';

export function calculateResult(userChoice, computerChoice) {
  console.log('user: ', userChoice);
  console.log('computer: ', computerChoice);

  if (!userChoice || !computerChoice) return 'E';
  if (userChoice.toString() === computerChoice.toString()) return 'T';

  let options = gameOptions;

  let option = options.filter((option) => userChoice === option.option);

  console.log('option', option);
  console.log('does it beat?', option[0].beats.includes(computerChoice));

  return option[0].beats.includes(computerChoice) ? 'W' : 'L';
}
