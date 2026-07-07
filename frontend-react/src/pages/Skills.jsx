import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineCode,
  HiOutlineVariable,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineCollection,
  HiOutlineGlobeAlt,
} from 'react-icons/hi'

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

const SkillCategory = ({ category, skills, index }) => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getOffsetFromMouse = (skillIndex) => {
    if (!containerRef.current) return { x: 0, y: 0 }
    
    const rect = containerRef.current.getBoundingClientRect()
    const skillElements = containerRef.current.querySelectorAll('[data-skill-index]')
    
    if (skillElements[skillIndex]) {
      const skillRect = skillElements[skillIndex].getBoundingClientRect()
      const skillCenterX = skillRect.left - rect.left + skillRect.width / 2
      const skillCenterY = skillRect.top - rect.top + skillRect.height / 2
      
      const dx = mousePosition.x - skillCenterX
      const dy = mousePosition.y - skillCenterY
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // Push away from mouse if close, otherwise no offset
      if (distance < 120) {
        const force = (120 - distance) / 120
        return {
          x: -(dx / distance) * force * 20,
          y: -(dy / distance) * force * 20,
        }
      }
    }
    
    return { x: 0, y: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true, margin: '-50px' }}
      className="mb-12"
    >
      <h3 className="text-xl md:text-2xl font-catamaran font-bold text-manjal-gold mb-6 uppercase tracking-wide">
        {category}
      </h3>
      
      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative"
      >
        {skills.map((skill, skillIndex) => {
          const offset = getOffsetFromMouse(skillIndex)
          const isHovered = hoveredIndex === skillIndex

          return (
            <motion.div
              key={`${category}-${skillIndex}`}
              data-skill-index={skillIndex}
              animate={{
                x: offset.x,
                y: offset.y,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
              onMouseEnter={() => setHoveredIndex(skillIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.1,
              }}
              className="group relative"
            >
              <motion.div
                className="bg-sandal-ash bg-opacity-30 border border-manjal-gold border-opacity-20 rounded-lg p-6 text-center cursor-pointer transition h-full flex flex-col items-center justify-center"
                animate={{
                  borderColor: isHovered 
                    ? 'rgba(193, 68, 46, 0.5)' 
                    : 'rgba(217, 164, 65, 0.2)',
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  animate={{
                    boxShadow: isHovered 
                      ? '0 0 20px rgba(193, 68, 46, 0.3)' 
                      : '0 0 0px rgba(193, 68, 46, 0)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-5xl text-manjal-gold mb-3 group-hover:text-kumkum-vermilion transition"
                  animate={{
                    rotate: isHovered ? 12 : 0,
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill name */}
                <p className="text-ilai-ivory text-sm md:text-base font-semibold text-center">
                  {skill.name}
                </p>

                {/* Hover description */}
                {skill.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : -10,
                    }}
                    className="text-ilai-ivory text-opacity-60 text-xs mt-2 absolute bottom-0 left-0 right-0 px-2 pb-2 text-center"
                  >
                    {skill.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: <HiOutlineVariable />, description: 'Data & AI/ML' },
        { name: 'JavaScript', icon: <HiOutlineCode />, description: 'Web Dev' },
        { name: 'React', icon: <HiOutlineSparkles />, description: 'Front-end' },
        { name: 'Java', icon: <HiOutlineCode />, description: 'Back-end' },
        { name: 'C', icon: <HiOutlineVariable />, description: 'Systems' },
        { name: 'SQL', icon: <HiOutlineCollection />, description: 'Databases' },
      ],
    },
    {
      category: 'Front-End',
      skills: [
        { name: 'React', icon: <HiOutlineSparkles />, description: 'UI Framework' },
        { name: 'Tailwind CSS', icon: <HiOutlineCode />, description: 'Styling' },
        { name: 'Framer Motion', icon: <HiOutlineSparkles />, description: 'Animation' },
        { name: 'Three.js', icon: <HiOutlineCube />, description: '3D Graphics' },
        { name: 'Vite', icon: <HiOutlineCode />, description: 'Build Tool' },
        { name: 'TypeScript', icon: <HiOutlineVariable />, description: 'Type Safety' },
      ],
    },
    {
      category: 'AI/ML & Data',
      skills: [
        { name: 'TensorFlow', icon: <HiOutlineSparkles />, description: 'Deep Learning' },
        { name: 'Pandas', icon: <HiOutlineCollection />, description: 'Data Analysis' },
        { name: 'NumPy', icon: <HiOutlineVariable />, description: 'Numerical' },
        { name: 'Scikit-Learn', icon: <HiOutlineCode />, description: 'ML Models' },
        { name: 'CV', icon: <HiOutlineCube />, description: 'Computer Vision' },
        { name: 'NLP', icon: <HiOutlineSparkles />, description: 'Text Processing' },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <HiOutlineCode />, description: 'Version Control' },
        { name: 'Docker', icon: <HiOutlineCube />, description: 'Containers' },
        { name: 'VS Code', icon: <HiOutlineCode />, description: 'Editor' },
        { name: 'Figma', icon: <HiOutlineGlobeAlt />, description: 'Design' },
        { name: 'Linux', icon: <HiOutlineVariable />, description: 'OS' },
        { name: 'GitHub', icon: <HiOutlineCode />, description: 'Collaboration' },
      ],
    },
  ]

  return (
    <>
      <div className="relative min-h-screen bg-iravu-indigo">
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <SectionTitle
            title="Skills & Tech Stack"
            subtitle="Move your mouse to watch the icons respond to your presence"
          />

          <div className="space-y-16">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.category}
                category={category.category}
                skills={category.skills}
                index={index}
              />
            ))}
          </div>

          {/* Expertise summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-manjal-gold border-opacity-20 text-center"
          >
            <p className="text-ilai-ivory text-opacity-70 text-base md:text-lg max-w-2xl mx-auto">
              I'm always learning and exploring new technologies. My focus is on creating elegant solutions that bridge the gap between design and functionality, with a special interest in interactive web experiences and intelligent systems.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default Skills
