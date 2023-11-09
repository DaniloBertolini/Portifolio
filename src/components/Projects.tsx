import link from '/link.svg'
import github from '/github.svg'
import projectsArray from '../assets/projects'

function Projects() {
  return (
    <section id="projects" className="w-[80%] mx-auto pt-36 mb-40">
      <h3 className='text-5xl font-semibold py-10'>Projetos</h3>
      <ul>
        {projectsArray.map((item, index) => (
          <li className="flex lg:flex-row flex-col items-center mb-20" key={ index }>
          <div className='w-full'>
            <h4 className="mb-10 text-xl font-semibold">{ item.title }</h4>
            <p className='leading-relaxed mb-5'>{ item.description }</p>
            <div className='flex justify-between'>

              <div className='sm:h-14 h-11 sm:w-40 w-32 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
                <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
                  <img src={ link } alt="link logo" className='sm:w-8 w-7' />
                  <a href={item.link } target='_blank' className='sm:text-lg text-md'>
                    Visualizar
                  </a>
                </button>
              </div>

              <div className='sm:h-14 h-11 sm:w-40 w-32 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
                <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
                  <img src={ github } alt="github logo" className='sm:w-8 w-7' />
                  <a href={ item.github } target='_blank' className='pl-2 sm:text-lg text-md'>
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
          <img src={`${ item.image }`} alt={`Foto Projeto ${index}`} className="2xl:w-[650px] xl:w-[500px] lg:w-[400px] md:w-[550px] sm:w-[400px] w-[300px] lg:ml-20 mt-9 lg:mt-0 rounded-lg" />
        </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects