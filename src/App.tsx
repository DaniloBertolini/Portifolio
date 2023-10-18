import { Home, Navbar, Projects } from './components'

function App() {
  return (
    <div className='bg-blackPrimary'>
      <Navbar />
      <main className='text-white'>
        <Home />
      
      <section className='bg-blackSecondary h-screen flex items-center justify-center'>
        <img src="/foto-danilo.png" alt="Foto Danilo"
          className='w-[450px] h-[450px] rounded-full px-1 mr-32 border-l-2 border-r-2 border-lightBluePrimary hover:animate-pulse object-cover'
        />
        <div className='w-[650px]'>
          <h3 className='font-semibold text-5xl mb-10'>Sobre mim</h3>
          <h4 className='text-xl mb-4'>Santa Catarina, Brasil</h4>
          <p className='text-justify'>Meu nome é Danilo Bertolini e sou Brasileiro. Minha paixão por tecnologia foi, quando na faculdade que eu fiz de Redes de Computadores no IFC, em 2019, teve 2 matérias de programação e 1 matéria de Desenvolvimento Web. A partir de lá, percebi que era realmente o que eu buscava e almejava para o meu futuro. Nas horas vagas, procuro novos desafios para praticar e evoluir meus conhecimentos. Tenho conhecimento em HTML, CSS, JS, TS, React, Testes, mySQL, Docker, Node, API Rest, bem como metodologias ágeis.</p>
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

// https://www.caioaugusto.dev/
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
