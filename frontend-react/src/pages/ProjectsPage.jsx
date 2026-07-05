import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import MagnetButton from '../components/reactbits/MagnetButton'
import SplitText from '../components/reactbits/SplitText'
import SpotlightCard from '../components/reactbits/SpotlightCard'

const projects = [
  {
    title: 'Yugam',
    description: 'Modern front-end UI with responsive design and smooth animation details.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Dharaneesh30/Yugam-Way-To-Your-Career',
  },
  {
    title: 'FIR Management System',
    description: 'Desktop application for organizing FIR records and improving report handling.',
    technologies: ['Python', 'GUI'],
    githubLink: 'https://github.com/Dharaneesh30/FIR-Management-System',
  },
  {
    title: 'Restaurant Order Management',
    description: 'Order management system designed with data structures for faster operations.',
    technologies: ['C', 'Linked List', 'Queue'],
    githubLink: 'https://github.com/Dharaneesh30/Restaurant-Order-Management-System',
  },
  {
    title: 'MediSync',
    description: 'Healthcare workflow project connecting doctors, patients, and pharmacies.',
    technologies: ['Java', 'GUI', 'Database'],
    githubLink: 'https://github.com/Dharaneesh30/MediSync',
  },
  {
    title: 'LifeEcho - LifePath AI',
    description: 'Digital marketing campaign built with design tools, content strategy, and AI support.',
    technologies: ['Digital Marketing', 'WordPress', 'Canva', 'AI Tools'],
    githubLink: 'https://github.com/Dharaneesh30',
  },
  {
    title: 'Meeting Notes Summarizer',
    description: 'AI-assisted utility that helps condense meeting notes into useful summaries.',
    technologies: ['Python', 'GUI', 'AI Tools'],
    githubLink: 'https://github.com/Dharaneesh30',
  },
  {
    title: 'YAAL - Intern On Full Stack',
    description: 'Full-stack application for internship management and team workflows.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Backend'],
    githubLink: 'https://github.com/madhan-231105/YAAL-web',
  },
  {
    title: 'ValorEdge AI',
    description: 'Analytics-focused platform for extracting insights from data workflows.',
    technologies: ['Python', 'React', 'FastAPI'],
    githubLink: 'https://github.com/Dharaneesh30/ValorEdge-AI',
  },
  {
    title: 'CloudMatrix',
    description: 'Scalable cloud-oriented solution with algorithm-heavy backend logic.',
    technologies: ['Python', 'Flask', 'React', 'Algorithms'],
    githubLink: 'https://github.com/Dharaneesh30/CloudMatrix',
  },
  {
    title: 'CredLens',
    description: 'Financial analytics concept featuring credit scoring and decision support.',
    technologies: ['Python', 'React', 'FastAPI', 'Finance'],
    githubLink: 'https://github.com/Dharaneesh30/CredLens',
  },
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

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
      data-page="projects"
    >
      <section className="hero-card compact-hero">
        <p className="eyebrow">Projects</p>
        <SplitText as="h1" className="hero-title" text="Selected Work" />
        <p className="hero-subtitle wide-copy">
          A collection of academic, full-stack, UI, and AI-assisted projects that show both development and product thinking.
        </p>
      </section>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <SpotlightCard
            as={motion.article}
            key={project.title}
            className="card project-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="project-copy">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <MagnetButton as={motion.div} strength={0.18}>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="icon-link action-link">
                  <FaGithub /> View Code
                </a>
              </MagnetButton>
            </div>
          </SpotlightCard>
        ))}
      </motion.div>
    </motion.div>
  )
}
