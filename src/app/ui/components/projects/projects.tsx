'use client';
import React from 'react';
import styles from './projects.module.css';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
import SectionTitle from '../sectionTitle';
export default function Projects() {
  const { mobileScroll } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 61 && mobileScroll <= 80;
  return (
    <section
      className={styles.projects}
      id="projects"
    >
      <SectionTitle
        text="Projects"
        show={isMobileScrollInRange}
      />
      <div>
        <div className={styles.projectContainer}>
          <div>
            <img
              alt="share-it screen shot"
              src="./share-it.webp"
            ></img>
          </div>
          <p>Share-it app</p>
          <div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              aut, pariatur consequuntur autem eius alias at reiciendis
              blanditiis impedit, veniam velit cumque facere repellat non.
              Exercitationem excepturi optio consequuntur mollitia?
            </p>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <div>
            {' '}
            <img
              alt="accessibility widget page screen shot"
              src="./accessibility-widget.webp"
            ></img>
          </div>
          <p>Web Accessibility widget</p>
        </div>
      </div>
    </section>
  );
}
