import { navLinks, socialLinks } from '../data/content'
import SocialIcon from './SocialIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-5 pb-7 pt-14 sm:px-7 sm:pt-16">
      <div className="mx-auto max-w-270">
        <div className="grid gap-8 pb-9 sm:grid-cols-3 sm:gap-10">
          <div>
            <div className="mb-3.5 flex items-center gap-2 font-mono text-[15px] text-ink">
              <span className="font-medium text-accent">{'</>'}</span>
              Arpita Dubey
            </div>
            <p className="max-w-[34ch] text-sm text-muted">
              Crafting clean, reliable interfaces with modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[15px] font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted hover:text-accent">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[15px] font-semibold">Connect With Me</h4>
            <p className="mb-4 max-w-[32ch] text-sm text-muted">
              Let's connect and build something great together.
            </p>
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
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line pt-6 text-[13px] text-muted">
          <span>© {year} Arpita Dubey. All rights reserved.</span>
          <span>
            Built with <span className="text-accent">♥</span> using React &amp; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
