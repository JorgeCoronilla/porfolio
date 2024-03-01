import React from 'react';
import styles from './experience.module.css';
import Card from './card';
import { experienceData } from './data';
export default function Experience() {
  return (
    <section
      className={styles.experience}
      id="experience"
    >
      {experienceData.map((experience, index) => (
        <Card
          key={index}
          {...experience}
        />
      ))}
    </section>
  );
}
