import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Sobre mim' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      <nav className={`
        flex justify-between items-center h-20
        md:px-24 sm:px-16 px-6
        transition-all duration-500
        border-b
        ${scrolled
          ? 'bg-cyber-black/90 backdrop-blur-md border-neon-cyan/10'
          : 'bg-transparent border-transparent'}
      `}>
        <a href='#' className='font-display text-lg tracking-[0.3em] uppercase text-neon-cyan
                               hover:text-glow-cyan transition-all duration-300'>
          {'<DB/>'}
        </a>

        <ul className='flex md:gap-10 gap-5'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='group relative font-body text-sm md:text-base uppercase tracking-widest
                           text-hud-gray hover:text-neon-cyan transition-all duration-300'
              >
                <span className='text-neon-cyan/0 group-hover:text-neon-cyan/100 transition-all mr-1
                                 font-mono text-xs'>
                  //
                </span>
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan
                                 group-hover:w-full transition-all duration-300
                                 shadow-neon-cyan' />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
