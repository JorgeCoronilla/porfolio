'use client';
import React, { useEffect } from 'react';
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
  isMobile: boolean;
}
export default function NavBar({ scroll, isMobile }: Props) {
  const [scrollLimit, setScrollLimit] = React.useState(0);
  useEffect(() => {
    if (!isMobile) {
      setScrollLimit(0);
    } else {
      setScrollLimit(15);
    }
  }, [scroll, isMobile]);
  return (
    <nav className={styles.navBar}>
      {links.map((link, index) => (
        <div
          key={`l-${link.text}`}
          className={
            scroll - scrollLimit >= 25 * index - 1 &&
            scroll - scrollLimit <= 25 * (index + 1)
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
