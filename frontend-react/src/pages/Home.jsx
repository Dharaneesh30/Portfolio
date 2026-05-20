import React from 'react'
import { motion } from 'framer-motion'
import { homeHighlights, profilePlaceholders } from '../data/siteContent'

export default function Home(){
  return (
    <motion.section
      className="page-shell px-6 py-10 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="content-grid mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface rounded-[2rem] p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.34em] text-emerald-400/65">Home</p>
            <h1 className="headline mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Personal portfolio layout with clean placeholders and strong alignment.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64">
              This section is your main introduction page. Replace the placeholder fields with your actual
              profile, short introduction, and professional positioning.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeHighlights.map((item) => (
                <div key={item.label} className="surface-soft rounded-[1.5rem] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-white/78">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/60">Photo placeholder</p>
            <div className="mt-5 flex min-h-[24rem] items-center justify-center rounded-[1.75rem] border border-dashed border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
              <div>
                <p className="headline text-2xl text-emerald-300">[Insert your photo here]</p>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  You can replace this block later with your profile image, portrait render, or hero photo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {profilePlaceholders.map((card, index) => (
            <motion.article
              key={card.title}
              className="surface rounded-[2rem] p-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
            >
              <p className="text-lg font-semibold text-white">{card.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/62">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
