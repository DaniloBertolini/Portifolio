import fotoDanilo from '/fotoDanilo.png'

function About() {
  return (
    <section id="about" className='bg-blackSecondary h-screen flex items-center justify-center'>
      <img src={ fotoDanilo } alt="Foto Danilo"
        className='w-[450px] h-[450px] rounded-full px-1 mr-32 border-l-2 border-r-2 border-lightBluePrimary object-cover'
      />
      <div className='w-[650px]'>
        <h3 className='font-bold text-5xl mb-10'>Sobre mim</h3>
        <h4 className='text-xl mb-4 font-semibold'>Santa Catarina, Brasil</h4>
        <p className='text-justify'>Meu nome é Danilo Bertolini e sou Brasileiro. Minha paixão por tecnologia foi, quando na faculdade que eu fiz de Redes de Computadores no IFC, em 2019, teve 2 matérias de programação e 1 matéria de Desenvolvimento Web. A partir de lá, percebi que era realmente o que eu buscava e almejava para o meu futuro. Nas horas vagas, procuro novos desafios para praticar e evoluir meus conhecimentos. Tenho conhecimento em HTML, CSS, JS, TS, React, Testes, mySQL, Docker, Node, API Rest, bem como metodologias ágeis.</p>
      </div>
    </section>
  )
}

export default About