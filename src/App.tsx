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
