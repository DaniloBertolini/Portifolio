import { About, Home, Navbar } from './components'
import linkedIn from '/linkedIn.svg'

function App() {
  return (
    <div className='bg-blackPrimary'>
      <Navbar />
      <main className='text-white'>
        <Home />
        <About />
        <div className='h-[50vh] flex flex-col justify-center items-center'>
          <h3 className='text-5xl font-semibold'>Contatos</h3>
          <p className='text-center mt-6 mb-10 text-xl'>
            Se quiser realiar um projeto ou conversar <br /> comigo, me mande um email: <br />
            <span className='text-blue-500 underline'>danilocbertolini@gmail.com</span>
          </p>
          <div>
            <div className='h-14 w-40 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
              <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
                <img src={ linkedIn } alt="linkedIn logo" />
                <a href="https://www.linkedin.com/in/danilobertolini/" target='_blank' className='pl-2 text-lg'>
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className='text-grayPrimary grid place-items-center h-12'>
        <p>@ 2023 - Danilo Bertolini</p>
      </footer>
    </div>
    )
  }
  
  export default App

// https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?type=design&node-id=58198-756&mode=design

// https://www.caioaugusto.dev/