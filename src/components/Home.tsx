import github from '/github.svg'

function Home() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center font-Poppins font-bold text-white my-auto">
    <div>
      <h2 className='lg:text-[5rem] md:text-[3rem] sm:text-[2rem] text-[1.2rem] leading-tight mb-10'>
        Olá! Eu sou <br />
        <span className="text-lightBluePrimary">Danilo Bertolini</span><br />
        Desenvolvedor Full Stack
      </h2>

      <div className='sm:h-14 h-11 sm:w-40 w-32 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
        <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
          <img src={ github } className='sm:w-8 w-7' alt="github logo" />
          <a href="https://github.com/DaniloBertolini" target='_blank' className='pl-2 sm:text-lg text-md'>
            GitHub
          </a>
        </button>
      </div>
      
    </div>
  </section>
  )
}

export default Home