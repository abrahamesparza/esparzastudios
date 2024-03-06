'use client'
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const pages = [
    {
      'page': 'About',
      'url': '/about',
      'key': 0
    },
    {
      'page': 'Services',
      'url': '/services',
      'key': 1
    },
  ]
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>E S P A R Z A<br/>
            S T U D I O S
        </h1>
      </div>
      <div className={styles.servicesContainer}>
        <ul className={styles.serviceList}>
          {pages.map(item => (
            <li key={item.key}>
             <Link className={styles.link} href={item.url}>{item.page}</Link>
              </li>
          ))}
        </ul>
      </div>
    </main>
    
  );
}
