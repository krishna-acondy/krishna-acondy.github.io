'use client';

import React from 'react';
import styles from './page.module.css';
import { Typewriter } from 'react-simple-typewriter';
import { Fira_Code } from 'next/font/google';
import Contact from '../components/Contact';
import me from './me.jpeg';

const firaCode = Fira_Code({ subsets: ['latin'], weight: '400' });

const typingSpeed = 120;

export default function Home() {
  const [showSubtitle, setShowSubtitle] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, typingSpeed * 16);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, typingSpeed * 55);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${me.src})`,
          }}
        ></div>
        <div className={`${firaCode.className} ${styles.header}`}>
          <h1>
            <Typewriter words={['Krishna Acondy']} typeSpeed={typingSpeed} />
          </h1>
          {showSubtitle && (
            <h4>
              <Typewriter
                words={['Lead Full-stack Software Engineer']}
                cursor
                cursorBlinking
                cursorStyle='_'
                typeSpeed={typingSpeed}
              />
            </h4>
          )}
          <a
            className={styles.button}
            href='/krishna-cv-aug-2023.pdf'
            target='_blank'
            rel='noopener noreferrer'
            style={{ visibility: showButton ? 'visible' : 'hidden' }}
          >
            <span>Download CV</span>
          </a>
        </div>
      </div>
      <Contact />
    </main>
  );
}
