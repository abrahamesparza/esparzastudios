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
      <Link className={styles.homeLink} href={'/'}>
        Home
      </Link>
      <div className={styles.bodyContainer}>
        <ul className={styles.services}>
          <li
            className={`${styles.service} ${styles.webDevelopmentTitle}`}
            onClick={handleWebDevelopmentClick}
          >
            WEB DEVELOPMENT
          </li>
          {/* Services for WEB DEVELOPMENT */}
          {webDevelopmentVisible && services['webDevelopment'].map((item) => (
            <div className={styles.listParent} key={item.id}>
              <li className={styles.service}>{item.service}</li>
              <li className={styles.price}>{item.price}</li>
              <li className={styles.description}>{item.description}</li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );

  // const [selectedSercice, setSelectedService] = useState(null)

  // const handleServiceClick = (index) => {
  //   setSelectedService(index)
  // }

  // const handleCloseModal = () => {
  //   setSelectedService(null)
  // }
  
  //   return (
  //     <main className={styles.main}>
  //       <Link className={styles.homeLink} href={'/'}>Home</Link>
  //       <div className={styles.bodyContainer}>
  //         <ul className={styles.services}>
  //         {services['data'].map((item: any, index: number) => (
  //           <div className={styles.listParent} key={item.id}>
  //             <li
  //             className={styles.service}
  //             onClick={() => handleServiceClick(index)}
  //             >
  //               {item.service}
  //               </li>
  //               {selectedSercice === index && (
  //                 <div className={styles.modal}>
  //                   <div className={styles.modalContent}>
  //                     <div>{item.price}</div>
  //                     <div>{item.description}</div>
  //                     <h4 onClick={handleCloseModal}>Close</h4>
  //                   </div>
  //                 </div>
  //               )}
  //             {/* <li className={styles.price}>{item.price}</li>
  //             <li className={styles.description}>{item.description}</li> */}
  //           </div>
  //         ))}
  //         </ul>
  //       </div>
  //     </main>
  //   );
  }