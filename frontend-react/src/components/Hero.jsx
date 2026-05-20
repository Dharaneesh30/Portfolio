import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeHero from './ThreeHero'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

export default function Hero(){
  return (
    <motion.section
      className="page-shell overflow-hidden px-6 pb-16 pt-10 sm:px-8 lg:px-10"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUp}
    >
      <div className="content-grid mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm uppercase tracking-[0.28em] text-white/66"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Product-minded developer | 3D portfolio experience
          </motion.p>

          <motion.h1
            className="headline max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75 }}
          >
            I build immersive digital products that turn technical ideas into polished experiences.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
          >
            I am Dharaneesh N, a Decision and Computing Sciences student focused on full-stack systems,
            data workflows, and interfaces that feel alive. This portfolio is designed to support tech
            proposals, presentations, and high-trust professional conversations.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
          >
            <Link
              to="/projects"
              className="rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore projects
            </Link>
            <Link
              to="/resume"
              className="rounded-full border border-white/10 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View resume
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {[
              ['3D-first storytelling', 'Premium scene work, cinematic motion, interactive depth'],
              ['Full-stack direction', 'Frontend polish paired with practical system thinking'],
              ['Proposal-ready presence', 'Structured for clients, panels, and technical showcases'],
            ].map(([title, description]) => (
              <article key={title} className="surface rounded-[1.6rem] p-5">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/62">{description}</p>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <ThreeHero className="h-[30rem] w-full lg:h-[42rem]" />
          <div className="pointer-events-none absolute -bottom-8 left-8 rounded-[1.7rem] border border-white/10 bg-slate-950/78 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Focus</p>
            <p className="mt-2 text-base text-white">3D UI, data-rich apps, professional product delivery</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
