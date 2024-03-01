import React from 'react';
import styles from './warning.module.css';
interface Props {
  show: boolean;
  message: string;
}

export default function Warning({ show, message }: Props) {
  if (!show) return null;
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}
