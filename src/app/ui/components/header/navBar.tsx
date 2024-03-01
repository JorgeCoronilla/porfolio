'use client';
import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const links = [
  { url: '/#cover', text: 'About' },
  { url: '/#experience', text: 'Experience' },
  { url: '/#projects', text: 'Projects' },
  { url: '/#contact', text: 'Contact' },
];
interface Props {
  scroll: number;
}
export default function NavBar({ scroll }: Props) {
  return (
    <nav className={styles.navBar}>
      {links.map((link, index) => (
        <div
          key={`l-${link.text}`}
          className={
            scroll >= 25 * index && scroll <= 25 * (index + 1)
              ? styles.current
              : ''
          }
        >
          <div className={styles.linkContainer}>
            <div className={styles.linkBar}></div>

            <Link
              href={link.url}
              key={link.url}
            >
              {link.text}
            </Link>
          </div>
        </div>
      ))}
    </nav>
  );
}
