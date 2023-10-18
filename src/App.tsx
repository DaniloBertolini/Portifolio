import { Navbar, Projects } from './components'
import github from '/github.svg'

function App() {
  return (
    <div className='bg-blackPrimary'>
      <Navbar />
      <main className='text-white'>
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
                <a href="#" className='pl-2'>
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </section>
      
      <section>
        <img src="#" alt="Foto Danilo" />
        <div>
          <h3>Sobre mim</h3>
          <h4>Santa Catarina, Brasil</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
      <Projects />
      <h3>Contatos</h3>
      <button>
        <a href="#">
          LinkedIn
          </a>
        </button>
        <button>
          <a href="#">
            E-mail
          </a>
        </button>
      </main>
      <footer>
        <p>2023 - Danilo Bertolini</p>
      </footer>
    </div>
    )
  }
  
  export default App

// https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?type=design&node-id=58198-756&mode=design

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
