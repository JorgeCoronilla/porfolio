import styles from './page.module.css';
import { ContactForm } from './ui/components/contact/contact';
import Cover from './ui/components/cover/cover';
import Experience from './ui/components/experience/experience';
import Interactive from './ui/components/interactive/interactive';
import Projects from './ui/components/projects/projects';

export default function Home() {
  return (
    <>
      <Interactive />
      <div className={styles.stain1}></div>
      <div className={styles.stain2}></div>
      <main className={styles.main}>
        <div className={styles.heroMobile}>
          <h1>Jorge Coronilla</h1>
          <h2>Front-end developer </h2>
          <p>Desarrollo de aplicaciones web, accesibilidad y diseño.</p>
        </div>
        <Cover />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
