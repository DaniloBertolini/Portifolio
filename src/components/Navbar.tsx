function Navbar() {
  return (
    <nav>
      <div className="flex justify-between fixed bg-blackPrimary items-center h-28 w-screen px-[3rem] text-[1.2rem]">
        <h1 className="text-lightBluePrimary">Portifólio</h1>
        <ul className="flex gap-16 text-white opacity-90">
          <li><a href="#" className="hover:text-blue-700">Sobre mim</a></li>
          <li><a href="#" className="hover:text-blue-700">Projetos</a></li>
          <li><a href="#" className="hover:text-blue-700">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar