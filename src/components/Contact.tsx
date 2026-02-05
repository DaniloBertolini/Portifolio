function Contact() {
  return (
    <section id='contact' className='relative bg-cyber-dark py-24 md:py-32'>
      <div className='absolute top-0 left-0 right-0 h-[1px]
                      bg-gradient-to-r from-transparent via-neon-magenta/20 to-transparent' />

      <div className='max-w-2xl mx-auto px-6 text-center'>
        <p className='font-mono text-sm text-neon-cyan/50 tracking-widest mb-4'>
          03. CONTATO
        </p>

        <h2 className='font-display text-3xl md:text-5xl font-bold uppercase text-hud-white mb-6'>
          Vamos criar algo
          <span className='text-neon-cyan text-glow-cyan'> incrível</span>?
        </h2>

        <p className='text-hud-gray text-base md:text-lg mb-8 leading-relaxed'>
          Se quiser realizar um projeto ou conversar comigo, me mande um email
          ou conecte-se pelo LinkedIn.
        </p>

        <div className='inline-block bg-cyber-surface border border-cyber-border
                        px-6 py-3 mb-10 font-mono text-sm clip-corner-sm'>
          <span className='text-neon-green'>$</span>
          <span className='text-hud-dim mx-2'>mail</span>
          <a
            href='mailto:danilocbertolini@gmail.com'
            className='text-neon-cyan hover:text-glow-cyan transition-all duration-300'
          >
            danilocbertolini@gmail.com
          </a>
        </div>

        <div className='flex justify-center gap-4'>
          <a
            href='https://www.linkedin.com/in/danilobertolini/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-neon inline-flex items-center gap-2'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/DaniloBertolini'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-neon-magenta inline-flex items-center gap-2'
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
