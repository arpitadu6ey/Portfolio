import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { socialLinks } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motionVariants'
import SocialIcon from './SocialIcon'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="border-t border-line px-5 py-16 sm:px-7 sm:py-22">
      <div className="mx-auto max-w-270">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 flex flex-col gap-2.5 sm:mb-12 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <h2 className="font-display text-2xl font-semibold sm:text-[30px]">
            Let's work together.
          </h2>
          
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr]"
        >
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col gap-4.5">
            <label className="flex flex-col gap-2 text-[13.5px] text-muted">
              Name
              <input
                type="text"
                placeholder="Your name"
                required
                className="rounded-md border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-[13.5px] text-muted">
              Email
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="rounded-md border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-[13.5px] text-muted">
              Message
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="resize-y rounded-md border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-ink hover:opacity-90"
            >
              Send message
              <Send size={16} />
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2.5 rounded-md border border-green/40 bg-green/10 px-4 py-3.5 text-[13.5px] text-green"
              >
                <CheckCircle2 size={16} className="shrink-0" />
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>

          <motion.div variants={fadeUp}>
            <p className="mb-5.5 max-w-[44ch] text-[14.5px] text-muted">
              I'm always open to discussing new projects and opportunities.
              Reach out anytime!
            </p>

            <div className="mb-3.5 flex items-center gap-3.5 rounded-[10px] border border-line bg-surface px-4.5 py-4">
              <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Mail size={17} />
              </span>
              <div>
                <div className="mb-0.5 text-xs text-muted">Email</div>
                <div className="text-[14.5px] font-medium">arpitadubey0110@gmail.com</div>
              </div>
            </div>

            <div className="mb-5.5 flex items-center gap-3.5 rounded-[10px] border border-line bg-surface px-4.5 py-4">
              <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                <MapPin size={17} />
              </span>
              <div>
                <div className="mb-0.5 text-xs text-muted">Location</div>
                <div className="text-[14.5px] font-medium">Lucknow, India</div>
              </div>
            </div>

            <span className="mb-3 block text-[12.5px] text-muted">Connect with me</span>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9.5 w-9.5 items-center justify-center rounded-md border border-line text-muted hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.name} size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
