import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-10 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-270 items-center justify-between px-5 sm:px-7">
        <a href="#top" className="flex items-center gap-2 font-mono text-[15px] text-ink">
          <span className="font-medium text-accent">{'</>'}</span>
          Arpita Dubey
        </a>

        <div className="hidden gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ rotate: 15, scale: 0.9 }}
            aria-label="Toggle light and dark mode"
            className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-md border border-line text-muted hover:border-accent hover:text-accent"
          >
            {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <a
            href="#contact"
            className="hidden rounded-md border border-line px-4 py-2 text-[13px] hover:border-accent hover:text-accent md:inline-block"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-md border border-line text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col px-5 py-2 pb-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  className="border-b border-line py-3.5 text-[14.5px] text-muted last:border-none"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.05, duration: 0.25 }}
                className="mt-3.5 inline-flex w-fit rounded-md border border-line px-4 py-2 text-[13px]"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
