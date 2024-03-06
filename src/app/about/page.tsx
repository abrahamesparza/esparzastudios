import Link from "next/link";
import styles from '../page.module.css';

export default function About() {
    return (
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>E S P A R Z A<br/>
              S T U D I O S
          </h1>
        </div>
        <div className={styles.bodyContainer}>
          <p className={styles.aboutParagraph}>
          I'm just a laid-back Hispanic dude blessed with two awesome kiddos and married to my high school sweetheart.<br/><br/>
          Standing on business, I'm a Software Engineer and small business owner.<br/><br/>
          Off the screen, you'll catch me sweating it out in workouts and passing on some baseball wisdom to my son.<br/><br/>
          I'm all about that family life.<br/><br/>
          My main gig? Being a dad and husband.<br/><br/>
          My goal? Take it easy but always push for that 1% improvement daily.<br/><br/>
          To be a better version of myself each day.<br/><br/>
          </p>
        </div>
        <Link className={styles.homeLink} href={'/'}>Home</Link>
      </main>
    );
  }