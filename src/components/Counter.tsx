import React from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
  const [numb, setNumb] = React.useState(0)

  return (
    <div>
      <button className={styles.bth} onClick={() => setNumb(numb + 1)}>+</button>
      <span>{numb}</span>
      <button onClick={() => setNumb(numb - 1)}>-</button>
    </div>
  );
};

