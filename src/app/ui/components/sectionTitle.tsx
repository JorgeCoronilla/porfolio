import React from 'react';
import styles from '../../page.module.css';
interface Props {
  text: string;
  show: boolean;
}
export default function SectionTitle({ text, show }: Props) {
  if (!show) return null;
  return <h3 className={styles.title}>{text}</h3>;
}
