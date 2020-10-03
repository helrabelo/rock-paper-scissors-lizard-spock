import React from 'react';
import styles from './button.less';

const Button = (props) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`${styles.button} ${props.classes} ${props.primary ? styles.primary : '' } ${props.alert ? styles.alert : '' }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
