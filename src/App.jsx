import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import styles from './styles/App.module.css'


function App() {
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <div className={styles[theme]}> {/* Dynamically apply class based on theme */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App