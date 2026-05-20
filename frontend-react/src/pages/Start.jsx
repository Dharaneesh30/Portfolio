import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeHero from '../components/ThreeHero'

export default function Start(){
  return (
    <motion.section
      className="min-h-screen overflow-hidden px-6 py-6 sm:px-8 lg:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-8 rounded-[2rem] border border-emerald-500/16 bg-black/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
        <div className="flex h-full flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.38em] text-emerald-400/70">Welcome</p>
          <h1 className="headline mt-5 max-w-xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Welcome to my portfolio
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/62">
            A 3D portfolio experience with a black and green visual system, built as a clean base for
            your photo, projects, resume, and contact details.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/home"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Enter portfolio
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-emerald-500/24 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
            >
              View structure
            </Link>
          </div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ThreeHero className="h-[26rem] w-full lg:h-[42rem]" />
          <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-emerald-500/14 bg-black/72 px-5 py-4 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/55">3D intro panel</p>
            <p className="mt-2 text-sm text-white/66">Keep this screen minimal and let the model lead the first impression.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
