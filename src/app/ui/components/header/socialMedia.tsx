'use client';

import React from 'react';
import styles from './header.module.css';
import IconGithubLogo from '../icons/githubIcon';
import { IconLinkedinCircled } from '../icons/linkedinIcon';
import { IconGmail } from '../icons/gmailIcon';
import IconXLogo from '../icons/xIcon';

const socialMediaList = [
  {
    url: 'https://github.com/JorgeCoronilla',
    icon: <IconGithubLogo />,
  },
  {
    url: 'https://www.linkedin.com/in/jorge-coronilla-naranjo-20019376/',
    icon: <IconLinkedinCircled />,
  },
  {
    url: 'mailto:jorge.coronilla.naranjo@gmail.com',
    icon: <IconGmail />,
  },
  {
    url: 'mailto:   ',
    icon: <IconXLogo />,
  },
];

interface SocialMediaProps {
  className: string;
}

export default function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      {socialMediaList.map((socialMedia, index) => (
        <a
          key={`sm-${index}`}
          href={socialMedia.url}
          target="_blank"
          rel="noreferrer"
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
}
