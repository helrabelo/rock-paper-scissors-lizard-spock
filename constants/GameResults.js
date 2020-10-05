import styles from '../components/OptionCard/optioncard.less';

export const gameResults = [
  {
    game: null,
    user: null,
    computer: null,
  },
  {
    game: 'Win',
    user: styles.success,
    computer: styles.danger,
  },
  { game: 'Loss', user: styles.danger, computer: styles.success },
  { game: 'Tie', user: styles.neutral, computer: styles.neutral },
  { game: 'Error', user: styles.error, computer: styles.error },
];
