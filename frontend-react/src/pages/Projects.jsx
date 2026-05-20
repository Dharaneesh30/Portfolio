import React from 'react'
import { motion } from 'framer-motion'
import { projectPlaceholders } from '../data/siteContent'

export default function Projects(){
  return (
    <motion.section
      className="page-shell px-6 py-10 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="content-grid mx-auto max-w-7xl">
        <div className="surface rounded-[2rem] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-emerald-400/65">Projects</p>
          <h1 className="headline mt-4 text-4xl text-white sm:text-5xl">Project showcase outline</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/64">
            Each project card below is prepared for a project title, short summary, tech stack, GitHub link,
            and a placeholder area for preview images or mockups.
          </p>
        </div>

        <div className="mt-6 grid gap-6">
          {projectPlaceholders.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className="surface rounded-[2rem] p-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-[1.75rem] border border-dashed border-emerald-500/28 bg-emerald-500/5 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">Project preview</p>
                  <div className="mt-6 flex min-h-[14rem] items-center justify-center rounded-[1.5rem] border border-emerald-500/14 bg-black/40 text-center">
                    <p className="text-sm text-white/54">[Insert project image / 3D preview / cover here]</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">{project.type}</p>
                  <h2 className="headline mt-3 text-3xl text-white">{project.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-white/64">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-emerald-500/18 bg-emerald-500/8 px-4 py-2 text-sm text-emerald-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-emerald-500/14 bg-black/28 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">GitHub link</p>
                    <p className="mt-2 text-sm text-white/72">{project.github}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
