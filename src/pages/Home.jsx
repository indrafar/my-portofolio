import React from 'react'
import styles from '../styles/Home.module.css'
import profilePic from '../assets/profile.jpg'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <img src={profilePic} alt="Profile" className={styles.profile} />
      <h1>Indra Farhan</h1>
      <p>Deskripsi singkat tentang saya.</p>
      <p>Saya lahir pada tahun 2003 tepat nya di bulan agustus tanggal 22 </p>
      <p>dan saya tinggal di kota Cimahi dan besar di kota Cimahi</p>
    </section>
  )
}

export default Home