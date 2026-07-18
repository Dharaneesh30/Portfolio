import React from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Dharaneesh30', icon: FaGithub },
    { name: 'Email', url: 'mailto:dharaneesh.dn@gmail.com', icon: HiMail },
  ]

  return (
    <footer className="relative bg-iravu-indigo border-t border-manjal-gold border-opacity-20 pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-manjal-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="text-center md:text-left">
            <h3 className="text-xl font-bold font-catamaran text-ilai-ivory mb-2">DHARA</h3>
            <p className="text-ilai-ivory text-opacity-60 text-sm">Developer, Designer, Builder</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="text-center">
            <p className="text-xs uppercase tracking-widest text-manjal-gold mb-4 font-mono">Navigation</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/home" className="text-ilai-ivory hover:text-kumkum-vermilion transition">Home</a>
              <a href="/projects" className="text-ilai-ivory hover:text-kumkum-vermilion transition">Projects</a>
              <a href="/skills" className="text-ilai-ivory hover:text-kumkum-vermilion transition">Skills</a>
              <a href="/contact" className="text-ilai-ivory hover:text-kumkum-vermilion transition">Contact</a>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="text-center md:text-right">
            <p className="text-xs uppercase tracking-widest text-manjal-gold mb-4 font-mono">Connect</p>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a key={link.name} href={link.url} title={link.name} className="text-ilai-ivory hover:text-kumkum-vermilion transition text-lg">
                    <Icon />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-manjal-gold border-opacity-20 pt-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-ilai-ivory text-opacity-50 mb-4">
            © {currentYear} Dharaneesh N. All rights reserved.
          </p>
          <p className="text-xs text-ilai-ivory text-opacity-50 mb-4 tamil-text italic">
            செய்யாமல் செய்த உதவிக்கு வையகமும் வானகமும் ஆற்றல் அரிது
          </p>
          <p className="text-xs text-manjal-gold text-opacity-70">
            - Thirukkural 101 (Thiruvalluvar)
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
