function Navbar() {
  return (
    <header>
      <nav className="flex justify-between fixed items-center h-28 w-screen md:px-[6rem] sm:px-[4rem] px-[2rem] sm:text-[1.2rem] text-[0.8rem] opacity-[.99] backdrop-blur-sm">
        <h1 className="text-lightBluePrimary">Portifólio</h1>
        <ul className="flex md:gap-16 gap-5 text-white opacity-90">
          <li><a href="#about" className="lg:hover:text-lightBluePrimary transition-all duration-200 ease-in-out">Sobre mim</a></li>
          <li><a href="#projects" className="lg:hover:text-lightBluePrimary transition-all duration-200 ease-in-out">Projetos</a></li>
          <li><a href="#contact" className="lg:hover:text-lightBluePrimary transition-all duration-200 ease-in-out">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar