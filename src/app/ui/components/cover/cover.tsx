import React from 'react';
import styles from './cover.module.css';
export default function Cover() {
  return (
    <section
      className={styles.cover}
      id="cover"
    >
      <div className={styles.hero}>
        <h1>Jorge Coronilla</h1>
        <h2>Front-end developer </h2>
        <p>Desarrollo de aplicaciones web, accesibilidad y diseño.</p>
      </div>
      <div>
        <p>
          With 18 years of international experience teaching languages and
          running my own business.
        </p>
        <p>Learning is one of my passions.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
