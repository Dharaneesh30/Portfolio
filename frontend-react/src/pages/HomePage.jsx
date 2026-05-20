import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function HomePage() {
  const education = [
    {
      school: 'CIT Coimbatore',
      degree: 'M.Sc Information Technology',
      years: '2024 - 2029',
      gpa: 'CGPA: 7.5/10'
    },
    {
      school: "St. Joseph's HSS",
      degree: 'Higher Secondary (12th Grade)',
      years: '2022 - 2024',
      gpa: 'Score: 92%'
    }
  ]

  const skills = [
    'Front End Developer', 'Python', 'React', 'FastAPI', 'Flask',
    'Java', 'C', 'Digital Marketing', 'AI Tools', 'WordPress', 'Data Analysis'
  ]

  const workshops = [
    'Web Development Masterclass',
    'AI & Machine Learning Fundamentals',
    'React Advanced Concepts',
    'Full Stack Development',
    'Digital Marketing Strategy'
  ]

  const certifications = [
    'React Certification - Udemy',
    'Python for Data Science - Coursera',
    'Web Design Certificate - Google',
    'AI Tools Specialist - LinkedIn Learning',
    'FastAPI Backend Development',
    'Flutter Basics - Udemy',
    'Digital Marketing Fundamentals'
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
      {/* Profile Section */}
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          {/* Photo Placeholder */}
          <motion.div
            variants={itemVariants}
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              border: '2px solid #00FF41',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0d0d0d',
              boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)',
              margin: '0 auto'
            }}
          >
            <span style={{ fontSize: '3rem', color: '#888888' }}>[ Your Photo Here ]</span>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <h1 style={{ marginBottom: '1rem' }}>Dharaneesh N</h1>
            <p style={{ marginBottom: '0.5rem', color: '#e0e0e0' }}>📍 Coimbatore, Tamil Nadu, India</p>
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href="tel:9489240892" className="icon-link"><FaPhone /> 9489240892</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link"><FaLinkedin /> LinkedIn</a>
              <a href="https://github.com/dharaneesh30" target="_blank" rel="noreferrer" className="icon-link"><FaGithub /> GitHub</a>
            </div>
            <p style={{ color: '#e0e0e0', lineHeight: '1.8' }}>
              Passionate tech enthusiast and full-stack developer with expertise in React, Python, and modern web technologies. 
              Committed to building innovative solutions and continuous learning.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="green-divider" />

      {/* Education Section */}
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-heading">EDUCATION</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {education.map((edu, idx) => (
            <motion.div key={idx} className="card" variants={itemVariants}>
              <h3 style={{ marginBottom: '0.5rem' }}>{edu.school}</h3>
              <p style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>{edu.degree}</p>
              <p style={{ color: '#888888', fontSize: '0.9rem' }}>{edu.years} • {edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      {/* Skills Section */}
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-heading">SKILLS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {skills.map((skill, idx) => (
            <motion.span key={idx} className="skill-pill" variants={itemVariants}>
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      {/* Workshops Section */}
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-heading">WORKSHOPS & TRAINING</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {workshops.map((workshop, idx) => (
            <motion.div key={idx} className="card" variants={itemVariants} style={{ textAlign: 'center' }}>
              <p>{workshop}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      {/* Certifications Section */}
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-heading">CERTIFICATIONS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {certifications.map((cert, idx) => (
            <motion.div key={idx} className="card" variants={itemVariants} style={{ textAlign: 'center' }}>
              <p>{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
