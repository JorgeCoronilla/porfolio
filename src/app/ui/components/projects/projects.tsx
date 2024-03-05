'use client';
import React from 'react';
import styles from './projects.module.css';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
import SectionTitle from '../sectionTitle';
import Image from 'next/image';
import shareIt from '../../../../../public/share-it.webp';
import accessibilityWidget from '../../../../../public/accessibility-widget.webp';
import LinkIcon from '../icons/linkIcon';
import stylesExperience from '../experience/experience.module.css';
import Pills from '../experience/pills';
export default function Projects() {
  const { mobileScroll, isMobileDevice } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 61 && mobileScroll <= 66;
  return (
    <section
      className={styles.projects}
      id="projects"
    >
      <SectionTitle
        text="Projects"
        show={isMobileScrollInRange && isMobileDevice}
      />
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <Image
              alt="share-it screen shot"
              src={shareIt}
              width={208}
              height={156}
            ></Image>
          </div>
          <div className={styles.textContainer}>
            <h2>Share-it app</h2>
            <p className={styles.description}>
              Full stack web app to manage personal and shared expenses.
            </p>
            <p className={styles.description}>
              Login, signUp, data base CRUD, responsive design, SEO.
            </p>
            <div className={stylesExperience.experienceLinks}>
              <div className={styles.link}>
                <a
                  href="https://share-it-omega.vercel.app/"
                  target="_blank"
                >
                  <div>
                    <LinkIcon />
                    <p>Share-it</p>
                  </div>
                </a>
              </div>
              <Pills
                pills={[
                  'TypeScript',
                  'React',
                  'Nextjs',
                  'CSS modules',
                  'SQLite',
                ]}
                classType="skills"
              />
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <Image
              alt="accessibility widget page screen shot"
              src={accessibilityWidget}
              width={208}
              height={156}
            ></Image>
          </div>
          <div className={styles.textContainer}>
            <h2>Accessibility Widget</h2>
            <p className={styles.description}>
              Web accessibility widget that helps users to navigate and change
              its content to make it accessibible.
            </p>

            <p className={styles.description}>
              Screen reader, font change, color, DOM analysisss.
            </p>
            <div className={stylesExperience.experienceLinks}>
              <div className={styles.link}>
                <a
                  href="https://www.goviewser.com/"
                  target="_blank"
                >
                  <div>
                    <LinkIcon />
                    <p>Viewser</p>
                  </div>
                </a>
              </div>
              <Pills
                pills={[
                  'JavaScript',
                  'Webpack',
                  'Dom',
                  'Jest',
                  'A11y',
                  'WCAG 2.2',
                ]}
                classType="skills"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className={styles.projectContainer}>
          <div>
            <Image
              alt="share-it screen shot"
              src={shareIt}
              width={208}
              height={156}
            ></Image>
          </div>
          <div>
            <h2>Share-it app</h2>
          </div>
          <div>
            <p className={styles.description}>
              Full stack web app to manage personal and shared expenses.
            </p>
            <p className={styles.description}>
              Login, signUp, data base CRUD, responsive design, SEO.
            </p>
            <div className={stylesExperience.experienceLinks}>
              <div className={styles.link}>
                <a
                  href="https://share-it-omega.vercel.app/"
                  target="_blank"
                >
                  <div>
                    <LinkIcon />
                    <p>Share-it</p>
                  </div>
                </a>
              </div>
              <Pills
                pills={[
                  'TypeScript',
                  'React',
                  'Nextjs',
                  'CSS modules',
                  'SQLite',
                ]}
                classType="skills"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <div>
            <Image
              alt="accessibility widget page screen shot"
              src={accessibilityWidget}
              width={208}
              height={156}
            ></Image>
          </div>
          <div>
            <h2>Accessibility Widget</h2>
          </div>
          <div>
            <p className={styles.description}>
              Web widget that helps users to navigate and change its content to
              make it accessibible.
            </p>
            <p className={styles.description}>
              Screen reader, font change, color, DOM analysisss.
            </p>
            <div className={stylesExperience.experienceLinks}>
              <div className={styles.link}>
                <a
                  href="https://www.goviewser.com/"
                  target="_blank"
                >
                  <div>
                    <LinkIcon />
                    <p>Viewser</p>
                  </div>
                </a>
              </div>
              <Pills
                pills={[
                  'JavaScript',
                  'Webpack',
                  'Dom',
                  'Jest',
                  'A11y',
                  'WCAG 2.2',
                ]}
                classType="skills"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
