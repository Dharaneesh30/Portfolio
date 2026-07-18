import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    viewport={{ once: true, margin: '-50px' }}
    className="mb-12 md:mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-catamaran font-bold text-ilai-ivory mb-2">
      {title}
    </h2>
    <div className="w-12 h-1 bg-gradient-to-r from-manjal-gold to-transparent" />
    {subtitle && (
      <p className="text-ilai-ivory text-opacity-60 text-base md:text-lg mt-4 max-w-2xl">
        {subtitle}
      </p>
    )}
  </motion.div>
)

const Contact = () => {
  const mailto = 'mailto:dharaneesh.dn@gmail.com?subject=Portfolio%20Contact%20-%20Let%27s%20connect'
  const contactOptions = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'dharaneesh.dn@gmail.com',
      link: mailto,
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Coimbatore, India',
      link: 'https://maps.google.com/maps?q=Coimbatore,India',
    },
  ]

  return (
    <div className="relative min-h-screen bg-iravu-indigo flex flex-col">
      <section className="flex-1 py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <SectionTitle
          title="Let's Connect"
          subtitle="A quiet closing note for collaboration, conversation, and new ideas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-ilai-ivory mb-8">Get in touch</h3>

            <div className="space-y-6 mb-12">
              {contactOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <motion.a
                    key={option.label}
                    href={option.link}
                    target={option.label === 'Location' ? '_blank' : undefined}
                    rel={option.label === 'Location' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 120, damping: 14 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, borderColor: 'rgba(193, 68, 46, 0.5)' }}
                    className="flex items-start gap-4 p-4 border border-manjal-gold border-opacity-20 rounded-lg hover:bg-sandal-ash hover:bg-opacity-20 transition"
                  >
                    <div className="text-2xl text-manjal-gold mt-1">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-manjal-gold text-sm uppercase tracking-wide font-mono mb-1">
                        {option.label}
                      </p>
                      <p className="text-ilai-ivory hover:text-kumkum-vermilion transition">
                        {option.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 14 }}
              viewport={{ once: true }}
            >
              <p className="text-ilai-ivory text-opacity-60 mb-4 text-sm">Or find me on:</p>
              <div className="flex gap-4">
                <a href="https://github.com/Dharaneesh30" target="_blank" rel="noopener noreferrer" className="text-manjal-gold hover:text-kumkum-vermilion text-lg transition">
                  GitHub
                </a>
                <span className="text-ilai-ivory text-opacity-30">/</span>
                <a href="https://linkedin.com/in/dharaneesh-n" target="_blank" rel="noopener noreferrer" className="text-manjal-gold hover:text-kumkum-vermilion text-lg transition">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
            className="bg-sandal-ash bg-opacity-20 border border-manjal-gold border-opacity-20 rounded-lg p-8 md:p-10 flex flex-col justify-center"
          >
            <p className="text-manjal-gold text-xs uppercase tracking-widest font-mono mb-4">
              Contact Me
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-ilai-ivory mb-5">
              Have an idea, opportunity, or collaboration in mind?
            </h3>
            <p className="text-ilai-ivory text-opacity-70 leading-relaxed mb-8">
              Send me a note directly from your mail app. I prefer simple, human messages over heavy forms, and I will get back as soon as I can.
            </p>
            <motion.a
              href={mailto}
              whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(193, 68, 46, 0.25)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-kumkum-vermilion text-ilai-ivory font-semibold rounded-lg transition hover:bg-opacity-90"
            >
              <HiMail />
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 md:px-8 border-t border-manjal-gold border-opacity-20 bg-sandal-ash bg-opacity-10 mt-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-ilai-ivory text-opacity-60 text-base md:text-lg italic mb-6 tamil-text">
            செய்யாமல் செய்த உதவிக்கு வையகமும் வானகமும் ஆற்றல் அரிது
          </p>
          <p className="text-ilai-ivory text-opacity-50 text-xs md:text-sm">
            - Thirukkural 101 (Thiruvalluvar)
          </p>
          <p className="text-ilai-ivory text-opacity-60 text-sm md:text-base mt-4">
            Even heaven and earth together cannot repay a kindness done without expectation.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
