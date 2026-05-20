import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from 'emailjs-com'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // TODO: Replace with your EmailJS service ID and template ID
    // Sign up at https://www.emailjs.com/ for free
    const serviceID = 'YOUR_SERVICE_ID'
    const templateID = 'YOUR_TEMPLATE_ID'
    const userID = 'YOUR_PUBLIC_KEY'

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch(() => {
        console.log('For now, just clearing form (TODO: setup EmailJS)')
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      })
  }

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '9489240892', link: 'tel:9489240892' },
    { icon: FaEnvelope, label: 'Email', value: 'TODO@gmail.com', link: 'mailto:TODO@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Coimbatore, India', link: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com', link: 'https://linkedin.com' },
    { icon: FaGithub, label: 'GitHub', value: 'dharaneesh30', link: 'https://github.com/dharaneesh30' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container pt-32"
    >
      <h2 className="section-heading">GET IN TOUCH</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.a
                key={idx}
                href={info.link}
                className="card"
                variants={itemVariants}
                whileHover={{ x: 10, boxShadow: '0 0 30px rgba(0, 255, 65, 0.4)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <Icon style={{ fontSize: '2rem', color: '#00FF41' }} />
                <div>
                  <p style={{ color: '#888888', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>{info.label}</p>
                  <p style={{ margin: 0, color: '#e0e0e0', fontWeight: 600 }}>{info.value}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', fontFamily: 'Rajdhani' }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', fontFamily: 'Rajdhani' }}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', fontFamily: 'Rajdhani' }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', fontFamily: 'Rajdhani', resize: 'vertical' }}
          />

          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', padding: '0.8rem' }}
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#00FF41', textAlign: 'center' }}
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Social Icons */}
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '3rem'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link" style={{ fontSize: '1.5rem' }}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/dharaneesh30" target="_blank" rel="noreferrer" className="icon-link" style={{ fontSize: '1.5rem' }}>
          <FaGithub />
        </a>
        <a href="tel:9489240892" className="icon-link" style={{ fontSize: '1.5rem' }}>
          <FaPhone />
        </a>
      </motion.div>

      {/* Responsive adjustment */}
      <style>{`
        @media (max-width: 768px) {
          div:has(> input[type="email"]) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
