import React from 'react';
import styles from './container.less';

const Container = (props) => {
  return (
    <div {...props} className={styles.container + ' ' + props.className}>
      {props.children}
    </div>
  );
};

export default Container;
