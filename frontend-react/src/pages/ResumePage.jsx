import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import html2pdf from 'html2pdf.js'

export default function ResumePage() {
  const resumeRef = useRef()

  const downloadResume = () => {
    const element = resumeRef.current
    const opt = {
      margin: 10,
      filename: 'Dharaneesh_N_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    }
    html2pdf().set(opt).from(element).save()
  }

  const education = [
    { school: 'CIT Coimbatore', degree: 'M.Sc Information Technology', years: '2024 - 2029', gpa: 'CGPA: 7.5/10' },
    { school: "St. Joseph's HSS", degree: 'Higher Secondary (12th Grade)', years: '2022 - 2024', gpa: 'Score: 92%' }
  ]

  const skills = ['Front End Developer', 'Python', 'React', 'FastAPI', 'Flask', 'Java', 'C', 'Digital Marketing', 'AI Tools', 'WordPress', 'Data Analysis']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container pt-32"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 className="section-heading" style={{ margin: 0 }}>MY RESUME</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
          onClick={downloadResume}
        >
          Download PDF
        </motion.button>
      </div>

      <motion.div
        ref={resumeRef}
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '2rem',
          backgroundColor: '#000000',
          border: '1px solid #00FF41'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid #00FF41', paddingBottom: '1rem' }}>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>DHARANEESH N</h1>
          <p style={{ margin: '0 0 0.5rem 0', color: '#e0e0e0' }}>📍 Coimbatore, Tamil Nadu, India</p>
          <p style={{ margin: 0, color: '#e0e0e0' }}>📱 9489240892 | 💼 LinkedIn | 🐙 GitHub: dharaneesh30</p>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', borderBottom: '1px solid #00FF41', paddingBottom: '0.5rem' }}>PROFESSIONAL SUMMARY</h3>
          <p style={{ color: '#e0e0e0', margin: '0.5rem 0' }}>
            Passionate tech enthusiast and full-stack developer with expertise in React, Python, and modern web technologies. 
            Experienced in building innovative solutions and committed to continuous learning and technological advancement.
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', borderBottom: '1px solid #00FF41', paddingBottom: '0.5rem' }}>EDUCATION</h3>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '0.75rem' }}>
              <p style={{ margin: '0.25rem 0', color: '#00FF41', fontWeight: 'bold' }}>{edu.school}</p>
              <p style={{ margin: '0.25rem 0', color: '#e0e0e0' }}>{edu.degree}</p>
              <p style={{ margin: '0.25rem 0', color: '#888888', fontSize: '0.9rem' }}>{edu.years} • {edu.gpa}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', borderBottom: '1px solid #00FF41', paddingBottom: '0.5rem' }}>SKILLS</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill, idx) => (
              <span key={idx} style={{
                fontSize: '0.85rem',
                color: '#00FF41',
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                border: '1px solid #00FF41'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Highlight */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', borderBottom: '1px solid #00FF41', paddingBottom: '0.5rem' }}>NOTABLE PROJECTS</h3>
          <ul style={{ marginLeft: '1.5rem', color: '#e0e0e0' }}>
            <li>Yugam - Front End UI | HTML, CSS, JavaScript</li>
            <li>FIR Management System | Python, GUI</li>
            <li>YAAL - Full Stack Internship Platform | React, Tailwind CSS</li>
            <li>ValorEdge AI | Python, React, FastAPI</li>
            <li>CloudMatrix | Python, Flask, React</li>
            <li>CredLens | Financial Analytics Platform</li>
          </ul>
        </div>

        {/* TODO Comments for User */}
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#0d0d0d', border: '1px dashed #00FF41', borderRadius: '4px' }}>
          <p style={{ color: '#888888', fontSize: '0.9rem', margin: 0 }}>
            📝 TODO: Update with your personal information, actual LinkedIn/GitHub links, EmailJS API key, and more project details
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
