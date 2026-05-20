import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Yugam',
      description: 'Modern front-end UI with responsive design and smooth animations',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'FIR Management System',
      description: 'Desktop application for managing FIR records and reports',
      technologies: ['Python', 'GUI'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'Restaurant Order Management',
      description: 'Efficient order management system using data structures',
      technologies: ['C', 'Linked List', 'Queue'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'Doctor-Patient-Pharmacy System',
      description: 'Healthcare management system connecting doctors, patients, and pharmacies',
      technologies: ['Java', 'GUI', 'Database'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'LifeEcho - LifePath AI',
      description: 'Digital marketing campaign using AI tools and design',
      technologies: ['Digital Marketing', 'WordPress', 'Canva', 'AI Tools'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'Meeting Notes Summarizer',
      description: 'AI-powered tool to summarize meeting notes automatically',
      technologies: ['Python', 'GUI', 'AI Tools'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'YAAL - Intern On Full Stack',
      description: 'Full-stack web application for internship management',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Backend'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'ValorEdge AI',
      description: 'Advanced AI platform for data analysis and insights',
      technologies: ['Python', 'React', 'FastAPI'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'CloudMatrix',
      description: 'Scalable cloud-based solution with advanced algorithms',
      technologies: ['Python', 'Flask', 'React', 'Advanced Algorithms'],
      githubLink: 'https://github.com/dharaneesh30'
    },
    {
      title: 'CredLens',
      description: 'Financial analytics platform with credit scoring algorithms',
      technologies: ['Python', 'React', 'FastAPI', 'Financial Algorithms'],
      githubLink: 'https://github.com/dharaneesh30'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container pt-32"
    >
      <h2 className="section-heading">MY PROJECTS</h2>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: '#e0e0e0', flex: 1 }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem',
                  backgroundColor: 'rgba(0, 255, 65, 0.1)',
                  color: '#00FF41',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  border: '1px solid #00FF41'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00FF41',
                  transition: 'all 0.3s',
                  textDecoration: 'none'
                }}
              >
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
