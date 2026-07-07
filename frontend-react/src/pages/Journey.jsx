import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    year: 'Early Years',
    title: 'Curiosity First',
    description: 'Growing up in Tamil Nadu, I was drawn to the quiet question behind every tool: how does this work?',
    details: ['School projects sparked the first habit of taking things apart mentally', 'Technology felt less like a subject and more like a doorway'],
  },
  {
    year: 'First Code',
    title: 'Learning the Shape of Logic',
    description: 'Programming began as small experiments with syntax, errors, and the little thrill of seeing an idea run.',
    details: ['Built early confidence with C, Java, HTML, and CSS', 'Started connecting problem solving with expression'],
  },
  {
    year: '2024',
    title: 'Coimbatore Institute of Technology',
    description: 'Joined M.Sc. Decision and Computing Sciences at CIT, batch 2024-2029.',
    details: ['Deeper work in computing, algorithms, and decision sciences', 'A stronger foundation for AI/ML and applied software'],
  },
  {
    year: 'Now',
    title: 'AI, Front-End, and Creative Web',
    description: 'My current focus is building useful, expressive systems where interface, intelligence, and cultural memory meet.',
    details: ['React, Framer Motion, Three.js, Python, and AI/ML', 'Tamil-English digital identity as a design language'],
  },
]

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    viewport={{ once: true, margin: '-50px' }}
    className="mb-12 md:mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-catamaran font-bold text-ilai-ivory mb-2">{title}</h2>
    <div className="w-12 h-1 bg-gradient-to-r from-manjal-gold to-transparent" />
    <p className="text-ilai-ivory text-opacity-60 text-base md:text-lg mt-4 max-w-2xl">{subtitle}</p>
  </motion.div>
)

const TimelineItem = ({ milestone, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 30 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay: index * 0.1, type: 'spring', stiffness: 120, damping: 14 }}
    viewport={{ once: true, margin: '-50px' }}
    className={`relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-6 md:gap-10 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-3'}`}
  >
    <motion.article
      whileHover={{ scale: 1.02, borderColor: 'rgba(193, 68, 46, 0.45)' }}
      className="bg-sandal-ash bg-opacity-30 border border-manjal-gold border-opacity-20 rounded-lg p-6 md:p-8"
    >
      <p className="text-manjal-gold text-xs md:text-sm uppercase tracking-widest font-mono mb-2">{milestone.year}</p>
      <h3 className="text-xl md:text-2xl font-bold text-ilai-ivory mb-3">{milestone.title}</h3>
      <p className="text-ilai-ivory text-opacity-70 text-sm md:text-base leading-relaxed mb-4">{milestone.description}</p>
      <ul className="text-ilai-ivory text-opacity-60 text-xs md:text-sm space-y-1">
        {milestone.details.map((detail) => <li key={detail}>- {detail}</li>)}
      </ul>
    </motion.article>

    <div className="hidden md:flex col-start-2 row-start-1 flex-col items-center">
      <motion.div
        className="w-6 h-6 rounded-full border-2 border-manjal-gold bg-iravu-indigo"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.25, type: 'spring', stiffness: 120, damping: 14 }}
        viewport={{ once: true }}
      />
      {!isLast && (
        <motion.div
          className="w-px flex-1 min-h-28 bg-gradient-to-b from-manjal-gold to-kumkum-vermilion mt-4"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: index * 0.1 + 0.35, type: 'spring', stiffness: 120, damping: 14 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'top' }}
        />
      )}
    </div>
  </motion.div>
)

const Journey = () => (
  <div className="relative min-h-screen bg-iravu-indigo">
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionTitle title="My Journey" subtitle="From childhood curiosity to creative web experiences" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        viewport={{ once: true }}
        className="text-center mb-16 p-6 bg-sandal-ash bg-opacity-20 border border-manjal-gold border-opacity-20 rounded-lg"
      >
        <p className="text-manjal-gold tamil-text text-lg md:text-2xl italic">எண்ணம் போல் வாழ்க்கை</p>
        <p className="text-ilai-ivory text-opacity-60 text-sm md:text-base mt-2">Life follows thought - our choices shape our path</p>
      </motion.div>

      <div className="space-y-10 md:space-y-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-manjal-gold via-kumkum-vermilion to-manjal-gold md:hidden" />
        {milestones.map((milestone, index) => (
          <div key={milestone.title} className="pl-12 md:pl-0">
            <TimelineItem milestone={milestone} index={index} isLast={index === milestones.length - 1} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        viewport={{ once: true }}
        className="mt-20 pt-12 border-t border-manjal-gold border-opacity-20 text-center"
      >
        <p className="text-manjal-gold tamil-text text-base md:text-xl italic mb-4">எண்ணம் போல் வாழ்க்கை</p>
        <p className="text-ilai-ivory text-opacity-70 text-base md:text-lg max-w-2xl mx-auto">
          Every choice, every project, every line of code is a thought becoming real.
        </p>
      </motion.div>
    </section>
  </div>
)

export default Journey
