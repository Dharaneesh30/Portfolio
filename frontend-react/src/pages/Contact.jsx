import React from 'react'
import { motion } from 'framer-motion'
import { contactPlaceholders } from '../data/siteContent'

export default function Contact(){
  return (
    <motion.section
      className="page-shell px-6 py-10 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="content-grid mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface rounded-[2rem] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-emerald-400/65">Contact</p>
          <h1 className="headline mt-4 text-4xl text-white sm:text-5xl">Contact information placeholder area</h1>
          <p className="mt-5 text-base leading-8 text-white/64">
            Add your final email, phone, social links, and any platform where people should reach you.
          </p>

          <div className="mt-8 grid gap-4">
            {contactPlaceholders.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-emerald-500/14 bg-black/28 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/55">{item.label}</p>
                <p className="mt-2 text-sm text-white/72">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          className="surface rounded-[2rem] p-8"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.06, duration: 0.45 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/60">Form placeholder</p>
          <div className="mt-6 grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/76">Name</label>
              <input
                id="name"
                type="text"
                placeholder="[Visitor name]"
                className="w-full rounded-2xl border border-emerald-500/18 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/76">Email</label>
              <input
                id="email"
                type="email"
                placeholder="[Visitor email]"
                className="w-full rounded-2xl border border-emerald-500/18 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/76">Message</label>
              <textarea
                id="message"
                rows="7"
                placeholder="[Message placeholder]"
                className="w-full rounded-2xl border border-emerald-500/18 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black"
          >
            Submit button placeholder
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
