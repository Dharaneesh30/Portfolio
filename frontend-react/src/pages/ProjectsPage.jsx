import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import MagnetButton from '../components/reactbits/MagnetButton'
import SplitText from '../components/reactbits/SplitText'
import SpotlightCard from '../components/reactbits/SpotlightCard'

const projects = [
  {
    title: 'ValorEdge AI',
    problem: 'Making data-heavy workflows easier to understand and act on.',
    solution: 'I shaped an analytics-first concept around clearer insights and a more approachable product experience with React, FastAPI, and Python.',
    technologies: ['Python', 'React', 'FastAPI'],
    githubLink: 'https://github.com/Dharaneesh30/ValorEdge-AI',
    featured: true,
  },
  {
    title: 'CloudMatrix',
    problem: 'Building a scalable solution that could support more complex backend logic.',
    solution: 'I worked through the architecture and interface layers of a cloud-oriented idea with Flask, React, and algorithm-driven logic.',
    technologies: ['Python', 'Flask', 'React', 'Algorithms'],
    githubLink: 'https://github.com/Dharaneesh30/CloudMatrix',
  },
  {
    title: 'CredLens',
    problem: 'Exploring how financial decision support could feel clearer and more usable.',
    solution: 'I designed a concept around credit insights and decision support, pairing a fluid frontend with a practical backend approach.',
    technologies: ['Python', 'React', 'FastAPI', 'Finance'],
    githubLink: 'https://github.com/Dharaneesh30/CredLens',
  },
  {
    title: 'Yugam',
    problem: 'Creating a career-focused landing experience that felt modern and approachable.',
    solution: 'I built a polished front-end UI with responsive layouts and animation details to make the experience feel more immersive.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Dharaneesh30/Yugam-Way-To-Your-Career',
  },
  {
    title: 'FIR Management System',
    problem: 'Organizing FIR records and reports in a clearer workflow.',
    solution: 'I built a desktop application focused on streamlining record handling and making report management more structured.',
    technologies: ['Python', 'GUI'],
    githubLink: 'https://github.com/Dharaneesh30/FIR-Management-System',
  },
  {
    title: 'Restaurant Order Management',
    problem: 'Making order handling feel faster and more dependable for a small system.',
    solution: 'I used core data structures and a simple interface to model the workflow around queue-based operations.',
    technologies: ['C', 'Linked List', 'Queue'],
    githubLink: 'https://github.com/Dharaneesh30/Restaurant-Order-Management-System',
  },
  {
    title: 'MediSync',
    problem: 'Connecting doctors, patients, and pharmacies through a more unified experience.',
    solution: 'I worked on a healthcare workflow concept that brings the user journey together in one interface.',
    technologies: ['Java', 'GUI', 'Database'],
    githubLink: 'https://github.com/Dharaneesh30/MediSync',
  },
  {
    title: 'LifeEcho - LifePath AI',
    problem: 'Designing a digital marketing experience that could feel personal and well-structured.',
    solution: 'I contributed to a campaign concept with content strategy, design tools, and AI-assisted support.',
    technologies: ['Digital Marketing', 'WordPress', 'Canva', 'AI Tools'],
    githubLink: 'https://github.com/Dharaneesh30',
  },
  {
    title: 'Meeting Notes Summarizer',
    problem: 'Reducing the effort of turning meeting conversations into useful summaries.',
    solution: 'I explored an AI-assisted utility that helps condense notes into something more practical to review.',
    technologies: ['Python', 'GUI', 'AI Tools'],
    githubLink: 'https://github.com/Dharaneesh30',
  },
  {
    title: 'YAAL - Intern On Full Stack',
    problem: 'Supporting internship coordination and team workflows in one place.',
    solution: 'I helped shape a full-stack experience around collaboration, management, and smoother internal processes.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Backend'],
    githubLink: 'https://github.com/madhan-231105/YAAL-web',
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
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } },
}

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className="page-container"
      data-page="projects"
    >
      <motion.section
        className="hero-card compact-hero"
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24, delay: 0.08 }}
      >
        <p className="eyebrow">Projects</p>
        <SplitText as="h1" className="hero-title" text="Selected Work" />
        <p className="hero-subtitle wide-copy">
          A collection of academic, full-stack, UI, and AI-assisted projects shaped by curiosity, practical thinking, and a drive to make ideas usable.
        </p>
      </motion.section>

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
            className={`card project-card${project.featured ? ' project-feature' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2, scale: 1.01 }}
            style={{ transformPerspective: 1200 }}
          >
            <div className="project-copy">
              <div className="project-meta-row">
                <p className="project-kicker">{project.featured ? 'Featured case study' : 'Project snapshot'}</p>
                {project.featured && <span className="project-badge">Featured</span>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-story">
                <p><span className="story-label">Problem</span> {project.problem}</p>
                <p><span className="story-label">What I built</span> {project.solution}</p>
              </div>
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
