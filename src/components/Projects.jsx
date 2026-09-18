import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { projects } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motionVariants'

export default function Projects() {
  return (
    <section id="work" className="border-t border-line px-5 py-16 sm:px-7 sm:py-22">
      <div className="mx-auto max-w-270">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 flex flex-col gap-2.5 sm:mb-12 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <h2 className="font-display text-2xl font-semibold sm:text-[30px]">Selected work</h2>
          <p className="max-w-[36ch] text-sm text-muted">
            Projects I've built, covering everything from UI to logic.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className="grid items-center gap-8 border-b border-line py-10 last:border-none last:pb-0 lg:grid-cols-2 lg:gap-12"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`grid-texture relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-[10px] border border-line bg-linear-to-br from-surface to-editor ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="z-10 font-mono text-xs text-muted">[ {project.tag} ]</span>
                )}
              </motion.div>
              <div>
                <div className="mb-2.5 font-display text-xl font-semibold sm:text-[22px]">
                  {project.name}
                </div>
                <p className="mb-4 max-w-[42ch] text-[14.5px] text-muted">{project.desc}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[11.5px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.demoHref && (
                    <a
                      href={project.demoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] text-accent"
                    >
                      <ExternalLink size={14} /> Live demo
                    </a>
                  )}
                  {project.codeHref && (
                    <a
                      href={project.codeHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] text-muted hover:text-ink"
                    >
                      <Code2 size={14} /> Source code
                    </a>
                  )}
                  {!project.demoHref && !project.codeHref && (
                    <span className="text-[13.5px] text-muted/60">Links coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

