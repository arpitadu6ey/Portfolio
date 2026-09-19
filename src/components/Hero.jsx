import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motionVariants'

export default function Hero() {
  return (
    <header id="top" className="px-5 pb-18 pt-14 sm:px-7 sm:pb-24 sm:pt-22">
      <motion.div
        className="mx-auto grid max-w-270 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
      >
        <motion.div variants={fadeUp}>
          <div className="mb-4.5 font-mono text-[13px] text-green">
            // React Developer and UI/UX Enthusiast
          </div>
          <h1 className="mb-5 font-display text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-[42px] lg:text-[52px]">
            I build frontend interfaces that don't fall over at 3am.
          </h1>
          <p className="mb-8 max-w-[46ch] text-[15.5px] text-muted sm:text-[17px]">
            Building modern web applications with React and JavaScript,
            with a focus on clean code and thoughtful UI. Turning ideas
            into functional interfaces.
          </p>
          <div className="flex flex-col gap-3.5 sm:flex-row">
            <motion.a
              href="#work"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5.5 py-3 text-sm font-medium text-accent-ink hover:opacity-90"
            >
              View projects
            </motion.a>
            <motion.a
              href={`${import.meta.env.BASE_URL}Arpita-Dubey.pdf`}
              download="Arpita-Dubey.pdf"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5.5 py-3 text-sm font-medium hover:border-muted"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-[10px] border border-line bg-editor shadow-editor"
        >
          <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <div className="ml-3 font-mono text-xs text-muted">about.ts</div>
          </div>
          <div className="space-y-0 px-5 py-5 font-mono text-[13px] leading-loose">
            <div>
              <span className="inline-block w-5.5 select-none text-muted">1</span>
              <span className="text-[#C792EA]">const</span> engineer = {'{'}
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">2</span>
              &nbsp;&nbsp;name: <span className="text-green">'Arpita Dubey'</span>,
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">3</span>
              &nbsp;&nbsp;focus: [<span className="text-green">'React'</span>,{' '}
              <span className="text-green">'UI/UX'</span>],
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">4</span>
              &nbsp;&nbsp;location: <span className="text-green">'India'</span>,
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">5</span>
              &nbsp;&nbsp;status: <span className="text-green">'open to opportunities'</span>,
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">6</span>
              &nbsp;&nbsp;available: <span className="text-[#C792EA]">true</span>,
            </div>
            <div>
              <span className="inline-block w-5.5 select-none text-muted">7</span>
              {'};'}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}
