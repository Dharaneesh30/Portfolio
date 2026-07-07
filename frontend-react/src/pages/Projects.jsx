import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 15 }}
      viewport={{ once: true, margin: '-50px' }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-catamaran font-bold text-ilai-ivory mb-2">
        {title}
      </h2>
      {subtitle && (
        <div className="w-12 h-1 bg-gradient-to-r from-manjal-gold to-transparent" />
      )}
      {subtitle && (
        <p className="text-ilai-ivory text-opacity-60 text-base md:text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  const languages = project.language ? [project.language] : []
  const topics = project.topics || []
  const tags = [...languages, ...topics.slice(0, 2)].slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(193, 68, 46, 0.5)',
      }}
      className="group relative bg-sandal-ash bg-opacity-30 border border-manjal-gold border-opacity-20 rounded-lg p-6 md:p-8 transition cursor-default h-full flex flex-col"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-lg pointer-events-none bg-kumkum-vermilion blur-xl -z-10" style={{ opacity: '5%' }} />

      {/* Project name and description */}
      <div className="flex-1 mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-ilai-ivory mb-2 group-hover:text-kumkum-vermilion transition">
          {project.name}
        </h3>
        <p className="text-ilai-ivory text-opacity-60 text-sm md:text-base leading-relaxed">
          {project.description || 'A GitHub project.'}
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <motion.span
              key={idx}
              className="inline-block bg-manjal-gold bg-opacity-10 text-manjal-gold text-xs px-3 py-1 rounded-full font-mono border border-manjal-gold border-opacity-30"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-manjal-gold border-opacity-20">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-manjal-gold hover:text-kumkum-vermilion transition text-sm md:text-base font-mono"
        >
          <FaGithub /> Repository
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-manjal-gold hover:text-kumkum-vermilion transition text-sm md:text-base font-mono"
          >
            <HiExternalLink /> Live
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/Dharaneesh30/repos')
        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error('Invalid API response')
        }

        // Filter for portfolio-worthy projects: those with description and/or topics
        const filtered = data
          .filter(repo => !repo.fork && (repo.description || repo.topics?.length > 0))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 12)

        setProjects(filtered)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-iravu-indigo">
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <SectionTitle
            title="Projects"
            subtitle="Work I'm proud of — built with code, design, and intention"
          />

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-12 h-12 border-3 border-manjal-gold border-opacity-20 border-t-manjal-gold rounded-full"
                />
              </div>
              <p className="text-ilai-ivory text-opacity-60 mt-4">Loading projects...</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-kumkum-vermilion">{error}</p>
            </motion.div>
          )}

          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-ilai-ivory text-opacity-60">
                No projects found. Check back soon!
              </p>
            </motion.div>
          )}

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-12 border-t border-manjal-gold border-opacity-20"
          >
            <p className="text-ilai-ivory text-opacity-60 mb-4">
              Want to see more? Visit my GitHub →
            </p>
            <motion.a
              href="https://github.com/Dharaneesh30"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2 bg-sandal-ash border border-manjal-gold rounded-lg text-ilai-ivory hover:text-kumkum-vermilion transition"
            >
              View GitHub Profile
            </motion.a>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default Projects
