function Navbar() {
  return (
    <header>
      <nav className="flex justify-between fixed items-center h-28 w-screen px-[3rem] text-[1.2rem] opacity-[.99] backdrop-blur-sm">
        <h1 className="text-lightBluePrimary">Portifólio</h1>
        <ul className="flex gap-16 text-white opacity-90">
          <li><a href="#" className="hover:text-blue-700 transition-all duration-200 ease-in-out">Sobre mim</a></li>
          <li><a href="#" className="hover:text-blue-700 transition-all duration-200 ease-in-out">Projetos</a></li>
          <li><a href="#" className="hover:text-blue-700 transition-all duration-200 ease-in-out">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar