import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import profileImage from '../../Profile.jpeg'

const education = [
  {
    school: 'Coimbatore Institute of Technology',
    degree: 'M.Sc Decision and Computing Sciences',
    years: '2024 - 2029',
    gpa: 'CGPA: 7.4/10',
  },
  {
    school: "St. Joseph's HSS",
    degree: 'Higher Secondary (12th Grade)',
    years: '2022 - 2024',
    gpa: 'Score: 92%',
  },
]

const skills = [
  'Frontend Development',
  'React',
  'Python',
  'FastAPI',
  'Flask',
  'Java',
  'C',
  'Digital Marketing',
  'AI Tools',
  'WordPress',
  'Data Analysis',
]

const workshops = [
  'Digital Marketing Strategy',
  'Linux',
  'Git & GitHub'
  'Html5Up & Start Bootstrap'
]

const certifications = [
  'Digital Marketing Hackathon - IIT Madras',
  'Python for Data Science - NPTEL',
  'Data Science Training & Internship - Corizo',
  'Web Design Certificate - Coursera',
  'Lead Generation Messenger Chatbot - Coursera'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
      data-page="home"
    >
      <motion.section
        className="hero-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-grid">
          <motion.div variants={itemVariants} className="profile-photo-shell profile-photo-square-shell">
            <img src={profileImage} alt="Dharaneesh N" className="profile-image" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="eyebrow">About Me</p>
            <h1 className="hero-title">Dharaneesh N</h1>
            <p className="hero-subtitle">
              Full-stack developer focused on clean interfaces, practical systems, and modern web tools.
            </p>

            <div className="contact-pills">
              <span className="icon-link static-pill">
                <FaMapMarkerAlt /> Coimbatore, Tamil Nadu, India
              </span>
              <a href="tel:9489240892" className="icon-link">
                <FaPhone /> 9489240892
              </a>
              <a href="mailto:dharaneesh0530@gmail.com" className="icon-link">
                <FaEnvelope /> Email
              </a>
              <a href="https://www.linkedin.com/in/dharaneesh-n-292b30317" target="_blank" rel="noreferrer" className="icon-link">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Dharaneesh30" target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub /> GitHub
              </a>
            </div>

            <p className="intro-copy">
              Passionate tech enthusiast with experience in React, Python, FastAPI, and frontend design.
              I enjoy building useful products, improving user experience, and learning through real projects.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="green-divider" />

      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-heading">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <motion.article key={edu.school} className="card" variants={itemVariants}>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p className="muted">{edu.years} | {edu.gpa}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-heading">Skills</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <motion.span key={skill} className="skill-pill" variants={itemVariants}>
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-heading">Workshops And Training</h2>
        <div className="workshops-grid">
          {workshops.map((workshop) => (
            <motion.article key={workshop} className="card center-card" variants={itemVariants}>
              <p>{workshop}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <div className="green-divider" />

      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-heading">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <motion.article key={certification} className="card center-card" variants={itemVariants}>
              <p>{certification}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
