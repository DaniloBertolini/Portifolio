import github from '/github.svg'

function Home() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center font-Poppins font-bold text-white my-auto">
    <div>
      <h2 className='text-[5rem] leading-tight mb-10'>
        Olá! Eu sou <br />
        <span className="text-lightBluePrimary">Danilo Bertolini</span><br />
        Desenvolvedor Full Stack
      </h2>
      <div className='h-14 w-40 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
        <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
          <img src={ github } alt="github logo" />
          <a href="https://github.com/DaniloBertolini" target='_blank' className='pl-2 text-lg'>
            GitHub
          </a>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Home