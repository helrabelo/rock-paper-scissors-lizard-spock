import styles from '../components/OptionCard/optioncard.less';

export const gameResults = [
  {
    game: null,
    user: null,
    computer: null,
  },
  {
    game: 'W',
    user: styles.success,
    computer: styles.danger,
  },
  { game: 'L', user: styles.danger, computer: styles.success },
  { game: 'T', user: styles.neutral, computer: styles.neutral },
  { game: 'E', user: styles.error, computer: styles.error },
];
