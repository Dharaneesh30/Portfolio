import React from 'react'
import { motion } from 'framer-motion'

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

const Home = () => {
  const skills = [
    'React & Vite',
    'Python',
    'Java & C',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js & WebGL',
    'AI/ML',
    'Web Design',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <>
      <div className="relative min-h-screen bg-iravu-indigo">
        {/* Hero section */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                title="About Me"
                subtitle="Student, Developer, and Builder"
              />
              
              <motion.div className="space-y-6 text-ilai-ivory text-opacity-80">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  I'm Dharaneesh, an M.Sc. in Decision and Computing Sciences student at Coimbatore Institute of Technology (batch 2024–2029). I'm passionate about building beautiful, functional web experiences that blend technology with creative design.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  My interests span across front-end development, interactive 3D web experiences, AI/ML, and the intersection of design and code. I'm currently exploring creative ways to tell stories through web technologies, inspired by Tamil culture and digital innovation.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  When I'm not coding, you'll find me exploring design philosophies, reading about tech trends, or contributing to open-source projects. I believe in creating work that's not just functional, but meaningful and intentional.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right: Stats/Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { label: 'Current Role', value: 'M.Sc. Student' },
                { label: 'Institute', value: 'Coimbatore Inst. of Tech' },
                { label: 'Batch', value: '2024 – 2029' },
                { label: 'Focus', value: 'Full-Stack + AI/ML' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-sandal-ash bg-opacity-40 border border-manjal-gold border-opacity-20 rounded-lg p-4 md:p-6 hover:border-kumkum-vermilion hover:border-opacity-40 transition"
                >
                  <p className="text-manjal-gold text-xs md:text-sm uppercase tracking-wider font-mono mb-2">
                    {item.label}
                  </p>
                  <p className="text-ilai-ivory text-sm md:text-base font-semibold">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-manjal-gold border-opacity-20">
          <SectionTitle 
            title="Core Skills"
            subtitle="Technologies and tools I work with"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(193, 68, 46, 0.4)',
                }}
                className="bg-sandal-ash bg-opacity-30 border border-manjal-gold border-opacity-20 rounded-lg px-6 py-4 text-center transition cursor-default"
              >
                <p className="text-ilai-ivory font-mono text-sm md:text-base">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-ilai-ivory text-opacity-60 text-sm md:text-base">
              Explore my full skill set and interactive demos →
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-kumkum-vermilion to-manjal-gold bg-opacity-10 border border-kumkum-vermilion border-opacity-30 rounded-lg p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-catamaran font-bold text-ilai-ivory mb-4">
              Let's create something meaningful together
            </h3>
            <p className="text-ilai-ivory text-opacity-70 mb-6 max-w-2xl mx-auto">
              Interested in collaboration or just want to chat? I'm always open to new ideas and opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-kumkum-vermilion text-ilai-ivory font-semibold rounded-lg transition hover:bg-opacity-90"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default Home
