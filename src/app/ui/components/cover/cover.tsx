'use client';
import React from 'react';
import styles from './cover.module.css';
import Pills from '../experience/pills';
import SectionTitle from '../sectionTitle';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
const coverSkills = [
  'JavaScript',
  'TypeScript',
  'SOLID',
  'React',
  'NodeJs',
  'Nextjs',
  'CSS',
  'HTML',
  'Webpack',
  'Chrome extensions',
  'WCAG 2.2',
  'Express',
  'API rest',
  'Websockets',
  'MongoDB',
  'PostgreSQL',
  'SQL',
];

const coverMainPills = [
  'Performance',
  'Design',
  'Accessible',
  'Engaging',
  'Responsive',
  'Scalable',
  'SEO',
  'Security',
  'Cross-browser',
];
export default function Cover() {
  const { mobileScroll, isMobileDevice } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 14 && mobileScroll <= 26;

  return (
    <section
      className={styles.cover}
      id="cover"
    >
      <SectionTitle
        text="About me"
        show={isMobileScrollInRange && isMobileDevice}
      />
      <div className={styles.hero}>
        <h1 className={styles.title1}>
          <span className={styles.hi}>Hi!</span> I&apos;m{' '}
          <span className={styles.jorge}>Jorge</span>
        </h1>
        <h1 className={styles.title2}>Coronilla</h1>
        <h2>Front-end developer </h2>
        <h3>
          Creation of full-stack web applications, accessibility expert and
          design.
        </h3>
      </div>
      <div className={styles.paragraghContainer}>
        <p>
          Always open to bring more tools to my stack. Learning is one of my
          passions.
        </p>
        <Pills
          pills={coverMainPills}
          classType="strenths"
        />
        <Pills
          pills={coverSkills}
          classType="skills"
        />
      </div>
    </section>
  );
}
