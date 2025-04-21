import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.info}>
        <p>Email: <a href="mailto:indra.frhn44@gmail.com">indra.frhn44@gmail.com</a></p>
        <p>Phone: 081213142660</p>
        <p>Instagram: <a href="https://www.instagram.com/indrafrhn" target="_blank" rel="noopener noreferrer">@indrafrhn</a></p>
      </div>
    </section>
  );
};

export default Contact;
