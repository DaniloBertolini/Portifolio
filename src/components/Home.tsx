function Home() {
  return (
    <section className='relative h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-32 left-8 md:left-24 w-16 h-16 border-l-2 border-t-2
                        border-neon-cyan/20' />
        <div className='absolute bottom-16 right-8 md:right-24 w-16 h-16 border-r-2 border-b-2
                        border-neon-magenta/20' />
        <div className='absolute left-1/2 top-0 w-[1px] h-32
                        bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent' />
      </div>

      <div className='relative z-10 text-center px-6'>
        <p className='font-mono text-neon-green text-sm md:text-base mb-4 tracking-widest'>
          <span className='text-hud-dim'>{'>'}</span> system.init
          <span className='text-neon-cyan'>( )</span>
          <span className='animate-flicker ml-1'>_</span>
        </p>

        <h1 className='font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl
                       mb-4 leading-tight'>
          <span className='text-hud-white'>Danilo</span>{' '}
          <span className='glitch text-neon-cyan text-glow-cyan' data-text='Bertolini'>
            Bertolini
          </span>
        </h1>

        <div className='flex items-center justify-center gap-3 mb-10'>
          <span className='h-[1px] w-8 bg-neon-magenta' />
          <p className='font-body text-lg md:text-2xl uppercase tracking-[0.25em]
                        text-hud-gray font-medium'>
            Full Stack Developer
            <span className='text-neon-magenta mx-2'>|</span>
            Game Enthusiast
          </p>
          <span className='h-[1px] w-8 bg-neon-magenta' />
        </div>

        <a
          href='https://github.com/DaniloBertolini'
          target='_blank'
          rel='noopener noreferrer'
          className='btn-neon inline-flex items-center gap-3'
        >
          <img src='/github.svg' className='w-5 invert' alt='GitHub' />
          <span>GitHub</span>
        </a>
      </div>

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 text-hud-dim'>
        <span className='font-mono text-xs uppercase tracking-widest'>Scroll</span>
        <div className='w-[1px] h-8 bg-gradient-to-b from-neon-cyan/50 to-transparent
                        animate-glow-pulse' />
      </div>
    </section>
  )
}

export default Home
