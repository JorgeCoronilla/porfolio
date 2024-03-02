import React from 'react';
import styles from './projects.module.css';
export default function Projects() {
  return (
    <section
      className={styles.projects}
      id="projects"
    >
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
