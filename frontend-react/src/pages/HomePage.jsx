import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  'Git & GitHub',
  'Html5Up & Start Bootstrap'
]

const certifications = [
  'Digital Marketing Hackathon - IIT Madras',
  'Python for Data Science - NPTEL',
  'Data Science Training & Internship - Corizo',
  'Web Design Certificate - Coursera',
  'Lead Generation Messenger Chatbot - Coursera'
]

const collaborators = ['FOSS CIT', 'Techgyan', 'Corizo', 'NPTEL']

const testimonials = [
  {
    quote: '[PLACEHOLDER: quote from a professor, team lead, or workshop mentor about working with you]',
    author: '[PLACEHOLDER: name — role, e.g. "FOSS CIT lead"]',
  },
  {
    quote: '[PLACEHOLDER: quote from a professor, team lead, or workshop mentor about working with you]',
    author: '[PLACEHOLDER: name — role, e.g. "FOSS CIT lead"]',
  },
  {
    quote: '[PLACEHOLDER: quote from a professor, team lead, or workshop mentor about working with you]',
    author: '[PLACEHOLDER: name — role, e.g. "FOSS CIT lead"]',
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

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.28], [0, -18])
  const imageParallax = useTransform(scrollYProgress, [0, 0.22], [0, -10])
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
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
          <motion.div variants={itemVariants} className="profile-photo-shell profile-photo-square-shell" style={{ y: imageParallax }}>
            <img src={profileImage} alt="Dharaneesh N" className="profile-image" />
          </motion.div>

          <motion.div variants={itemVariants} className="narrative-intro" style={{ y: heroParallax }}>
            <p className="eyebrow">About Me</p>
            <SplitText as="h1" className="hero-title" text="Dharaneesh N" />
            <p className="identity-statement">
              I’m a student developer who loves turning ideas into thoughtful digital experiences.
            </p>

            <div className="about-copy-stack">
              <p>
                I build practical web products and enjoy shaping interfaces that feel clear, useful, and human.
                My work spans React, Python, FastAPI, and frontend storytelling, with a strong focus on experiences that make everyday tasks easier.
              </p>
              <p>
                I approach problems by understanding the context first, simplifying the experience, and refining the details until the solution feels calm and intentional.
                I care about usability, momentum, and building things that people actually enjoy using.
              </p>
              <p>
                Right now I’m learning [PLACEHOLDER: what you're learning or excited about right now] and I’m especially excited by projects that sit at the intersection of design, AI, and practical tools.
              </p>
            </div>

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
              <MagnetButton as={motion.a} strength={0.16} href="https://www.linkedin.com/in/dharaneesh-n-292b30317" target="_blank" rel="noreferrer" className="icon-link">
                <FaLinkedin /> LinkedIn
              </MagnetButton>
              <MagnetButton as={motion.a} strength={0.16} href="https://github.com/Dharaneesh30" target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub /> GitHub
              </MagnetButton>
            </div>
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
        <div className="context-strip">
          {collaborators.map((item) => (
            <AnimatedContent as={motion.span} key={item} className="context-pill" variants={itemVariants}>
              {item}
            </AnimatedContent>
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
        <SplitText as="h2" className="section-heading" text="Education" />
        <div className="education-grid">
          {education.map((edu) => (
            <SpotlightCard as={motion.article} key={edu.school} className="card" variants={itemVariants}>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p className="muted">
                {edu.years} | {edu.school.includes('Institute') ? (
                  <>CGPA: <CountUp value={7.4} decimals={1} suffix="/10" /></>
                ) : (
                  <>Score: <CountUp value={92} suffix="%" /></>
                )}
              </p>
            </SpotlightCard>
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
        <SplitText as="h2" className="section-heading" text="What People Say" />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <SpotlightCard as={motion.article} key={item.author} className="card testimonial-card" variants={itemVariants}>
              <p className="testimonial-quote">“{item.quote}”</p>
              <p className="testimonial-author">{item.author}</p>
            </SpotlightCard>
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
        <SplitText as="h2" className="section-heading" text="Skills" />
        <div className="skills-container">
          {skills.map((skill) => (
            <AnimatedContent as={motion.span} key={skill} className="skill-pill" variants={itemVariants}>
              {skill}
            </AnimatedContent>
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
        <SplitText as="h2" className="section-heading" text="Workshops And Training" />
        <div className="workshops-grid">
          {workshops.map((workshop) => (
            <SpotlightCard as={motion.article} key={workshop} className="card center-card" variants={itemVariants}>
              <p>{workshop}</p>
            </SpotlightCard>
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
        <SplitText as="h2" className="section-heading" text="Certifications" />
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <SpotlightCard as={motion.article} key={certification} className="card center-card" variants={itemVariants}>
              <p>{certification}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
