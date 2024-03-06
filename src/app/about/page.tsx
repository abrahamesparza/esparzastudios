import Link from "next/link";
import styles from '../page.module.css';

export default function About() {
    return (
      <main className={styles.main}>
      <Link href={'/'}>Home</Link>
        <h1>hello</h1>
      </main>
    );
  }