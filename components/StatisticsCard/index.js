import React from 'react';
import styles from './card.less';

const StatisticsCard = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <span>{value}</span>
    </div>
  );
};

export default StatisticsCard;
