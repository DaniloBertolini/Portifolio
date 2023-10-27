import { About, Home, Navbar, Projects } from './components'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-blackPrimary'>
      <Navbar />
      <main className='text-white'>
        <Home />
        <About />
        <Projects />
        <Contact />
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

// https://bruno.art.br/blog/fazer-div-aparecer-desaparecer-ao-rolar-scroll-a-pagina-com-js-e-css/