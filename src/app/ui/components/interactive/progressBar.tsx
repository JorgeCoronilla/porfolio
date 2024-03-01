import React from 'react';
import styles from './interactiveElements.module.css';
interface ProgressBarProps {
  progress: string;
}
export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className={styles.progress}
      style={{ width: progress }}
    ></div>
  );
}
