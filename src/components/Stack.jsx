import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from '../lib/motionVariants'

const LEVEL_META = {
  Expert: { percent: 90, badgeClass: 'border-accent/50 bg-accent/10 text-accent' },
  Advanced: { percent: 75, badgeClass: 'border-green/40 bg-green/10 text-green' },
  Intermediate: { percent: 55, badgeClass: 'border-line bg-surface text-muted' },
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line px-5 py-16 sm:px-7 sm:py-22">
      <div className="mx-auto max-w-270">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 flex flex-col gap-2.5 sm:mb-12 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <h2 className="font-display text-2xl font-semibold sm:text-[30px]">
            Skills & technologies
          </h2>
          <p className="max-w-[36ch] text-sm text-muted">
            Overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUpSmall}
              className="rounded-[10px] border border-line bg-surface/40 p-5"
            >
              <div className="mb-4 flex items-center gap-2.5 border-b border-line pb-4">
                <span className="h-4 w-1 rounded-full bg-accent" />
                <h3 className="font-display text-[17px] font-semibold">{group.category}</h3>
              </div>

              <div className="flex flex-col gap-5">
                {group.skills.map((skill) => {
                  const meta = LEVEL_META[skill.level] ?? LEVEL_META.Intermediate
                  const Icon = skill.icon
                  return (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-canvas text-accent">
                            <Icon size={15} />
                          </span>
                          <div>
                            <div className="text-[13.5px] font-medium leading-tight">
                              {skill.name}
                            </div>
                            <div className="font-mono text-[11px] text-muted">{meta.percent}%</div>
                          </div>
                        </div>
                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10.5px] ${meta.badgeClass}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-line">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${meta.percent}%` }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
