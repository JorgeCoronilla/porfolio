import React from 'react';
import styles from './experience.module.css';

interface Props {
  pills: string[];
  classType: string;
}
export default function Pills({ pills, classType }: Props) {
  return (
    <div className={styles[classType]}>
      {pills.map((pill, index) => (
        <div key={index}>
          <p>{pill}</p>
        </div>
      ))}
    </div>
  );
}
