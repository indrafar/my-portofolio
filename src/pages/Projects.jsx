import React from 'react'
import styles from '../styles/Projects.module.css'

// Impor gambar
import projectImage from '../assets/ProjectTourAndTravel.jpg'

const projectList = [
  {
    name: 'Project Web TourAndTravel',
    date: 'Januari 2025',
    description: 'Project ini dibuat bersama kelompok,untuk memenuhi tugas UAS',
    tech: 'Java Script, CSS, mysql',
    img: projectImage, 
    link: 'https://github.com/teguhrinaldi/Pemweb_TourandTravel'
  },
  {
    name: 'Coming Soon',
    date: '-',
    description: '-',
    tech: '-',
    img:'-',
    link: null
  }
]

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.img} alt={project.name} className={styles.image} />
            <h3>{project.name}</h3>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <p><strong>{project.tech}</strong></p>
            {project.link ? <a href={project.link}>View Project</a> : <span>No link</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
