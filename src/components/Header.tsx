function Header() {
  return (
    <header className="h-screen uppercase text-white">
      <h2 className="">
        Olá, eu sou <br />
        <span className="text-lightBluePrimary">Danilo Bertolini</span><br />
        Desenvolvedor full stack
      </h2>

      <button>
        <a href="#">
          LinkedIn
        </a>
      </button>

      <button>
        <a href="#">
          GitHub
        </a>
      </button>
    </header>
  )
}

export default Header;