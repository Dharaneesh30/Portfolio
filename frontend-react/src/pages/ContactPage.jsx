import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '9489240892', link: 'tel:9489240892' },
  { icon: FaEnvelope, label: 'Email', value: 'dharaneesh0530@gmail.com', link: 'mailto:dharaneesh0530@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Coimbatore, India', link: null },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Dharaneesh N', link: 'https://www.linkedin.com/in/dharaneesh-n-292b30317' },
  { icon: FaGithub, label: 'GitHub', value: 'Dharaneesh30', link: 'https://github.com/Dharaneesh30' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const mailtoLink = useMemo(() => {
    const params = new URLSearchParams({
      subject: formData.subject || 'Portfolio enquiry',
      body: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    })

    return `mailto:dharaneesh0530@gmail.com?${params.toString()}`
  }, [formData])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
      data-page="contact"
    >
      <section className="hero-card compact-hero">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">Let&apos;s Connect</h1>
        <p className="hero-subtitle wide-copy">
          Reach out for collaborations, internships, freelance opportunities, or project discussions.
        </p>
      </section>

      <div className="contact-layout">
        <div className="contact-info-stack">
          {contactInfo.map((info) => {
            const Icon = info.icon
            const content = (
              <>
                <Icon className="contact-icon" />
                <div>
                  <p className="contact-label">{info.label}</p>
                  <p className="contact-value">{info.value}</p>
                </div>
              </>
            )

            if (info.link) {
              return (
                <a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="card contact-card"
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={info.label} className="card contact-card">
                {content}
              </div>
            )
          })}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="card contact-form-shell"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="form-title">Send A Message</h2>
          <p className="form-copy">
            This form opens your default email app with the message details filled in.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="7"
            required
          />

          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Email Draft
          </motion.button>

          {submitted && (
            <p className="success-text">Your email draft should now be open.</p>
          )}
        </motion.form>
      </div>
    </motion.div>
  )
}
