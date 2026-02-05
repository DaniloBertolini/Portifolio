import projectsArray from '../assets/projects'

function Projects() {
  return (
    <section id='projects' className='relative py-24 md:py-32'>
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='heading-cyber mb-16'>
          <span className='text-neon-cyan font-mono text-lg mr-3 font-normal'>02.</span>
          Projetos
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projectsArray.map((item, index) => (
            <article key={index} className='card-cyber group'>
              <div className='relative overflow-hidden'>
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className='w-full h-48 md:h-56 object-cover
                             group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-cyber-surface via-transparent to-transparent' />

                <div className='absolute top-4 right-4 font-display text-xs
                                text-neon-cyan/50 tracking-widest'>
                  {`{${String(index + 1).padStart(2, '0')}}`}
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='font-display text-lg uppercase tracking-wider text-hud-white
                                 group-hover:text-neon-cyan transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <span className='font-mono text-xs text-hud-dim'>
                    {item.date}
                  </span>
                </div>

                <p className='text-hud-gray text-sm leading-relaxed mb-6'>
                  {item.description}
                </p>

                <div className='flex gap-4'>
                  {item.link && (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-neon text-xs py-2 px-4'
                    >
                      Visualizar
                    </a>
                  )}
                  <a
                    href={item.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-neon-magenta text-xs py-2 px-4'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
