'use client';
import React from 'react';
import styles from './experience.module.css';
import Card from './card';
import { experienceData } from './data';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
import SectionTitle from '../sectionTitle';
export default function Experience() {
  const { mobileScroll, isMobileDevice } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 40 && mobileScroll <= 46;
  return (
    <section
      className={styles.experience}
      id="experience"
    >
      <SectionTitle
        text="Experience"
        show={isMobileScrollInRange && isMobileDevice}
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
