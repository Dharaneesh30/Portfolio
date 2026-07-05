import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import html2pdf from 'html2pdf.js'
import MagnetButton from '../components/reactbits/MagnetButton'
import ShinyText from '../components/reactbits/ShinyText'
import SplitText from '../components/reactbits/SplitText'

const education = [
  {
    school: 'Coimbatore Institute of Technology, Coimbatore',
    degree: 'M.Sc Decision and Computing Science',
    years: '2024 - 2029',
    score: 'CGPA: 7.4/10',
  },
  {
    school: "St. Joseph's Matric Higher Secondary School, Ondipudur, Coimbatore",
    degree: 'Higher Secondary',
    years: '2022 - 2024',
    score: '82%',
  },
]

const skills = [
  'Front End Page Developer',
  'Basic Data Analysis',
]

const projects = [
  {
    title: 'Project on Yugam way to your career Front end UI page',
    stack: 'HTML, CSS, Basic JavaScript',
  },
  {
    title: 'FIR Management system and Crime Analysis',
    stack: 'Python with GUI',
  },
  {
    title: 'Restaurant Order Management System',
    stack: 'Linked List with Queue in C',
  },
  {
    title: 'MediSync-Secure Doctor Patient Prescription and Pharmacy Management System',
    stack: 'Java with GUI',
  },
  {
    title: 'LifeEcho - A LifePath AI',
    stack: 'Digital Marketing Tools, WordPress, Canva, AI tools',
  },
  {
    title: 'Meeting Notes Summarizer',
    stack: 'Python with GUI, AI tools',
  },
  {
    title: 'YAAL - Intern On Full Stack',
    stack: 'React.js, Tailwind CSS, JavaScript (ES6+), Custom CSS Animations',
  },
  {
    title: 'ValorEdge AI',
    stack: 'Python, React, FastAPI',
  },
  {
    title: 'CloudMatrix',
    stack: 'Python, Flask, React, Algorithms',
  },
  {
    title: 'CredLens',
    stack: 'Python, React, FastAPI, Finance',
  },
]

const workshops = [
  'Digital Marketing Workshop at Techgyan',
  'AI Integrated Digital Marketing Workshop at CIT',
  'Linux Workshop by FOSS CIT',
  'Host Yourself 101 Workshop by FOSS CIT',
  'Hands On Flask Workshop by FOSS CIT',
]

const certifications = [
  'Data Science at Orizo Internship and Training',
  'Melnia Hackathon at CIT - Round 1 participant',
  'Principles of Management',
  'Data Science in Python - NPTEL',
  'Digital Marketing Hackathon at Techgyan',
  'Website Building Hands-on at Coursera Project Network',
  'Search Engine Optimization Hands-on at Coursera Project Network',
]

const extracurricular = [
  'Joint Secretary at FOSS CIT',
  'Social Media Manager at FOSS CIT',
]

export default function ResumePage() {
  const resumeRef = useRef(null)

  const downloadResume = () => {
    if (!resumeRef.current) return

    html2pdf()
      .set({
        margin: 10,
        filename: 'Dharaneesh_N_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      })
      .from(resumeRef.current)
      .save()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
      data-page="resume"
    >
      <div className="page-header-row">
        <div>
          <p className="eyebrow">Resume</p>
          <SplitText as="h1" className="hero-title small-title" text="Professional Snapshot" />
        </div>
        <MagnetButton
          as={motion.button}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn"
          onClick={downloadResume}
        >
          <ShinyText>Download PDF</ShinyText>
        </MagnetButton>
      </div>

      <motion.section
        ref={resumeRef}
        className="card resume-shell"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="resume-header">
          <h2>Dharaneesh N</h2>
          <p>M.Sc Decision and Computing Science</p>
          <p>Phone: 9489240892 | LinkedIn: Dharaneesh N | GitHub: dharaneesh30</p>
        </div>

        <div className="resume-section">
          <h3>Profile</h3>
          <p>
            A visionary tech enthusiast from Coimbatore Institute of Technology, blending innovation with leadership.
            A soft-spoken strategist who thrives on collaboration, creativity, and out-of-the-box thinking to drive impactful solutions.
          </p>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          {education.map((item) => (
            <div key={item.school} className="resume-item">
              <p className="resume-item-title">{item.school}</p>
              <p>{item.degree}</p>
              <p className="muted">{item.years} | {item.score}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>Projects</h3>
          <ul className="resume-list rich-resume-list">
            {projects.map((project) => (
              <li key={project.title}>
                <span className="resume-project-title">{project.title}</span>
                <span className="resume-project-stack">Tech stack: {project.stack}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="project-tags">
            {skills.map((skill) => (
              <span key={skill} className="project-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h3>Workshops</h3>
          <ul className="resume-list">
            {workshops.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-section">
          <h3>Certifications</h3>
          <ul className="resume-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-section">
          <h3>Extra Curricular</h3>
          <ul className="resume-list">
            {extracurricular.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>
    </motion.div>
  )
}
