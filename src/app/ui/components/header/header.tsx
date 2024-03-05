'use client';
import styles from './header.module.css';
import SocialMedia from './socialMedia';
import NavBar from './navBar';

interface HeaderProps {
  scroll: number;
  isMobile: boolean;
}
export default function Header({ scroll, isMobile }: HeaderProps) {
  return (
    <>
      <header className={styles.homeHeader}>
        <div className={styles.hero}>
          <h1 className={styles.title1}>
            <span className={styles.hi}>Hi!</span> I&apos;m{' '}
            <span className={styles.jorge}>Jorge</span>
          </h1>
          <h1 className={styles.title2}>Coronilla</h1>
          <h2>Full-stack developer </h2>
          <p>Desarrollo de aplicaciones web, accesibilidad y diseño.</p>
        </div>
        <NavBar
          scroll={scroll}
          isMobile={isMobile}
        />
        <SocialMedia />
      </header>
    </>
  );
}
