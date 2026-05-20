import React from 'react'
import { motion } from 'framer-motion'
import { resumeSections } from '../data/siteContent'

export default function Resume(){
  return (
    <motion.section
      className="page-shell px-6 py-10 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="content-grid mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface rounded-[2rem] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-emerald-400/65">Resume</p>
          <h1 className="headline mt-4 text-4xl text-white sm:text-5xl">Resume page scaffold</h1>
          <p className="mt-5 text-base leading-8 text-white/64">
            Use this page to place your resume summary on the site and keep the actual downloadable resume
            linked after you add your final PDF.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-dashed border-emerald-500/28 bg-emerald-500/5 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">Resume file placeholder</p>
            <p className="mt-3 text-sm leading-7 text-white/62">[Insert resume download button or PDF link here]</p>
          </div>
        </div>

        <div className="grid gap-6">
          {resumeSections.map((section, index) => (
            <motion.article
              key={section.title}
              className="surface rounded-[2rem] p-7"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/60">{section.title}</p>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-emerald-500/14 bg-black/28 px-4 py-4 text-sm leading-7 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
