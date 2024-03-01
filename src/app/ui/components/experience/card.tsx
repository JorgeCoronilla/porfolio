import React from 'react';
import styles from './experience.module.css';
import LinkIcon from '../icons/linkIcon';

interface Props {
  date: string;
  title: string;
  description: string;
  links: { name: string; href: string }[];
  skills: string[];
  pills: string[];
}

export default function Card({
  date,
  title,
  description,
  links,
  skills,
  pills,
}: Props) {
  return (
    <div>
      <div className={styles.row}>
        <div>
          <p>{date}</p>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description} </p>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className={styles.experienceLinks}>
            {links.map((link, index) => (
              <div key={index}>
                <a
                  href={link.href}
                  target="_blank"
                >
                  <div>
                    <LinkIcon />
                    <p>{link.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className={styles.skills}>
            {pills.map((pill, index) => (
              <div key={index}>
                <p>{pill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
