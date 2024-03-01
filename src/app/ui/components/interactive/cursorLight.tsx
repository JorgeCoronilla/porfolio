import React from 'react';
import styles from './interactiveElements.module.css';

interface cursorLightProps {
  x: number;
  y: number;
}

export default function CursorLight({ x, y }: cursorLightProps) {
  return (
    <div
      className={styles.cursor}
      style={{
        top: y,
        left: x,
      }}
    ></div>
  );
}
