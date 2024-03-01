'use client';
import styles from './header.module.css';
import SocialMedia from './socialMedia';
import NavBar from './navBar';

interface HeaderProps {
  scroll: number;
}
export default function Header({ scroll }: HeaderProps) {
  return (
    <>
      <header className={styles.homeHeader}>
        <div className={styles.hero}>
          <h1>Jorge Coronilla</h1>
          <h2>Front-end developer </h2>
          <p>Desarrollo de aplicaciones web, accesibilidad y diseño.</p>
        </div>
        <NavBar scroll={scroll} />
        <SocialMedia />
      </header>
    </>
  );
}
