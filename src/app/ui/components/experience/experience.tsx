'use client';
import React from 'react';
import styles from './experience.module.css';
import Card from './card';
import { experienceData } from './data';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
import SectionTitle from '../sectionTitle';
export default function Experience() {
  const { mobileScroll } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 25 && mobileScroll <= 60;
  return (
    <section
      className={styles.experience}
      id="experience"
    >
      <SectionTitle
        text="Experience"
        show={isMobileScrollInRange}
      />

      {experienceData.map((experience, index) => (
        <Card
          key={index}
          {...experience}
        />
      ))}
    </section>
  );
}
