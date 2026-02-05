function About() {
  const skills = [
    { name: 'React / TypeScript', level: 90 },
    { name: 'Node.js / API Rest', level: 85 },
    { name: 'HTML / CSS / JS', level: 95 },
    { name: 'MySQL / Databases', level: 80 },
    { name: 'Docker / DevOps', level: 70 },
    { name: 'Testing / QA', level: 75 },
  ]

  return (
    <section id='about' className='relative bg-cyber-dark py-24 md:py-32'>
      <div className='absolute top-0 left-0 right-0 h-[1px]
                      bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent' />

      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='heading-cyber mb-16'>
          <span className='text-neon-cyan font-mono text-lg mr-3 font-normal'>01.</span>
          Sobre mim
        </h2>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          <div className='relative flex-shrink-0'>
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
              <div className='absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-cyan' />
              <div className='absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neon-cyan' />
              <div className='absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neon-magenta' />
              <div className='absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-magenta' />

              <img
                src='/fotoDanilo.png'
                alt='Danilo Bertolini'
                className='w-full h-full object-cover clip-corner
                           grayscale hover:grayscale-0 transition-all duration-700'
              />

              <div className='absolute -bottom-4 left-1/2 -translate-x-1/2
                              bg-cyber-surface border border-cyber-border
                              px-4 py-1 font-mono text-xs text-neon-green
                              flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-neon-green animate-glow-pulse' />
                ONLINE
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex items-center gap-2 mb-4 font-mono text-sm text-hud-dim'>
              <span className='text-neon-cyan'>LOC:</span>
              <span className='text-hud-gray'>Santa Catarina, Brasil</span>
            </div>

            <p className='text-hud-gray text-base md:text-lg leading-relaxed mb-8'>
              Meu nome é Danilo Bertolini e sou Brasileiro. Minha paixão por
              tecnologia foi, quando na faculdade que eu fiz de Redes de
              Computadores no IFC, em 2019, teve 2 matérias de programação e
              1 matéria de Desenvolvimento Web. A partir de lá, percebi que
              era realmente o que eu buscava e almejava para o meu futuro.
              Nas horas vagas, procuro novos desafios para praticar e evoluir
              meus conhecimentos.
            </p>

            <div className='space-y-3'>
              <h4 className='font-display text-sm uppercase tracking-widest text-hud-dim mb-4'>
                {'// Skills'}
              </h4>
              {skills.map((skill) => (
                <div key={skill.name} className='group'>
                  <div className='flex justify-between font-mono text-xs mb-1'>
                    <span className='text-hud-gray group-hover:text-neon-cyan transition-colors'>
                      {skill.name}
                    </span>
                    <span className='text-hud-dim'>{skill.level}%</span>
                  </div>
                  <div className='h-1 bg-cyber-border rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-neon-cyan to-neon-purple
                                 rounded-full transition-all duration-1000'
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
