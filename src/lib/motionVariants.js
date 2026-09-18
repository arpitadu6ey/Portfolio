// Shared animation variants so every component uses the same motion language.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// Parent wrapper: staggers its motion children in one after another.
export const staggerContainer = (staggerDelay = 0.08, startDelay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: startDelay,
    },
  },
})

// Standard scroll-triggered viewport settings: animate once, a bit before
// the element is fully in view.
export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -40px 0px' }
