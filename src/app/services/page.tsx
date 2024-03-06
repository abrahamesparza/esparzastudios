'use client'

import Link from "next/link";
import { useState } from "react";

import styles from '../page.module.css';
import services from '../../../data/services.json'


export default function Services() {
  const [webDevelopmentVisible, setWebDevelopmentVisible] = useState(false);

  const handleWebDevelopmentClick = () => {
    setWebDevelopmentVisible((prevVisible) => !prevVisible);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>E S P A R Z A<br/>
            S T U D I O S
        </h1>
      </div>
      <div className={styles.bodyContainer}>
        <ul className={styles.services}>
          <li
            className={`${styles.service} ${styles.webDevelopmentTitle}`}
            onClick={handleWebDevelopmentClick}
          >
            WEB DEVELOPMENT
          </li>
          {webDevelopmentVisible && services['webDevelopment'].map((item) => (
            <div className={styles.listParent} key={item.id}>
              <li className={styles.service}>{item.service}</li>
              <li className={styles.price}>{item.price}</li>
              <li className={styles.description}>{item.description}</li>
            </div>
          ))}
        </ul>
      </div>
      <Link className={styles.homeLink} href={'/'}>
        Home
      </Link>
    </main>
  );
  }