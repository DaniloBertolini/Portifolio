import { About, Home, Navbar, Projects, Contact } from './components'

function App() {
  return (
    <div className='bg-cyber-black font-body min-h-screen relative'>
      <div className='fixed inset-0 bg-grid pointer-events-none opacity-50' />

      <Navbar />
      <main className='text-hud-white relative z-10'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className='relative z-10 text-hud-gray border-t border-cyber-border py-6'>
        <div className='flex items-center justify-center gap-2 font-mono text-sm'>
          <span className='text-neon-cyan opacity-60'>&gt;</span>
          <p className='tracking-widest uppercase'>2025 // Danilo Bertolini</p>
          <span className='text-neon-cyan opacity-60'>_</span>
        </div>
      </footer>
    </div>
  )
}

export default App
