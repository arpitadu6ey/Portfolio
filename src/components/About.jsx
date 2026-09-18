import { motion } from 'framer-motion'
import { aboutFacts } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motionVariants'

export default function About() {
  return (
    <section id="about" className="border-t border-line px-5 py-16 sm:px-7 sm:py-22">
      <motion.div
        className="mx-auto max-w-270"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
      >
        <motion.div
          variants={fadeUp}
          className="mb-10 flex flex-col gap-2.5 sm:mb-12 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <h2 className="font-display text-2xl font-semibold sm:text-[30px]">About</h2>
          <p className="max-w-[36ch] text-sm text-muted">
            A short version of the long story.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <motion.div variants={fadeUp} className="space-y-3.5 text-[15.5px] text-muted">
            <p className="max-w-[60ch]">
              I'm a frontend-leaning developer who likes interfaces that stay
              clean under pressure. Most of my work sits at the
              intersection of design and code — building components,
              structuring layouts, and making sure the thing still feels
              right on any screen.
            </p>
            <p className="max-w-[60ch]">
              Specialized in building web applications with modern technologies 
              from React and Next.js to TypeScript and modern CSS frameworks. 
              I'm committed to writting clean, maintainable code and staying 
              current with the latest web technologies.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3.5 rounded-[10px] border border-line bg-surface p-5"
          >
            {aboutFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-3 border-b border-line pb-3 text-[13.5px] last:border-none last:pb-0"
              >
                <span className="font-mono text-[11.5px] text-muted">{fact.label}</span>
                {fact.value}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
