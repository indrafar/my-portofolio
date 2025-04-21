import React from 'react';
import styles from '../styles/About.module.css';
import { VscVscode } from 'react-icons/vsc';  
import { FaGithub } from 'react-icons/fa';   
import { SiMysql } from 'react-icons/si';    

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>Saya adalah mahasiswa prodi Informatika angkatan 2023, dan saya kuliah di ITENAS Bandung.</p>
      
      <h3>Skills</h3>
      <ul className={styles.skills}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Mysql</li>
      </ul>

      <h3>Tools & Framework</h3>
      <div className={styles.tools}>
        <div className={styles.toolItem}>
          <VscVscode className={styles.icon} />
          <p>VS Code</p>
        </div>
        <div className={styles.toolItem}>
          <FaGithub className={styles.icon} />
          <p>Git</p>
        </div>
        <div className={styles.toolItem}>
          <SiMysql className={styles.icon} />
          <p>MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default About;
