import { Atom, Braces, FileCode2, Triangle, Database, Server, GitBranch, Smartphone, Palette, Zap } from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    name: 'E-Commerce Web Application',
    desc: 'A responsive e-commerce storefront with product browsing by category, real-time search, multi-filter listings, and full cart management — add, update quantity, and remove items, all handled client-side.',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    tag: 'dashboard preview',
    image: '/projects/project01.png',
    demoHref: 'https://forever-1310.netlify.app',
    codeHref: 'https://github.com/arpitadu6ey/E-Commerce-Website.git',
  },
  {
    name: 'Animated Portfolio Design',
    desc: 'A dark-themed developer portfolio featuring an interactive hero background along with scroll-triggered animations built with AOS for a modern, accessible feel. Fully responsive with a type-safe component architecture.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tag: 'architecture diagram',
    image: '/projects/project02.png',
    demoHref: '',
    codeHref: 'https://github.com/arpitadu6ey/portfolio_dev.git',
  },
  {
    name: 'Habit Tracker',
    desc: 'A habit-tracking app that lets you add daily habits, check them off, and watch your streaks build over time. Each habit displays a 7-day activity row so patterns are easy to spot at a glance.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tag: 'CLI demo',
    image: '/projects/project03.png',
    demoHref: 'https://habit-tracker-theta-gules.vercel.app/',
    codeHref: 'https://github.com/arpitadu6ey/Habit-Tracker.git',
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Expert', icon: Atom },
      { name: 'JavaScript', level: 'Advanced', icon: Braces },
      { name: 'Tailwind CSS', level: 'Advanced', icon: Palette },
      { name: 'Next.js', level: 'Advanced', icon: Triangle },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'MySQL', level: 'Expert', icon: Database },
      { name: 'Node.js', level: 'Intermediate', icon: Server },
    ],
  },
  {
    category: 'Tools & Practice',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', icon: GitBranch },
      { name: 'Responsive Design', level: 'Expert', icon: Smartphone },
      { name: 'Figma', level: 'Intermediate', icon: Palette },
      { name: 'Vite', level: 'Advanced', icon: Zap },
    ],
  },
]

export const aboutFacts = [
  { label: 'Based in', value: 'Lucknow, India' },
  { label: 'Education', value: 'B.Tech, CSE' },
  { label: 'Interest', value: 'Full Stack' },
  { label: 'Seeking', value: 'Development roles' },
]

export const socialLinks = [
  { name: 'github', label: 'GitHub', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
]