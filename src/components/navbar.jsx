import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <h1>Hallo Guys</h1>
        <div className={styles.links}>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <button onClick={onToggleTheme} className={styles.themeButton}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>


  )
}

export default Navbar