import React from 'react';
import styles from './modal.module.css';

interface Props {
  show: boolean;
  message: string;
}
export default function Modal({ show, message }: Props) {
  if (!show) return null;
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
