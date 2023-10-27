import linkedIn from '/linkedIn.svg'

function Contact() {
  return (
    <div id="contact" className='h-[50vh] bg-blackSecondary flex flex-col justify-center items-center'>
      <h3 className='text-5xl font-semibold'>Contatos</h3>
      <p className='text-center mt-6 mb-10 text-xl'>
        Se quiser realizar um projeto ou conversar <br /> comigo, me mande um email: <br />
        <span className='text-blue-500 underline'>danilocbertolini@gmail.com</span>
      </p>
      <div>
        <div className='h-14 w-40 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
          <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
            <img src={ linkedIn } alt="linkedIn logo" />
            <a href="https://www.linkedin.com/in/danilobertolini/" target='_blank' className='pl-2 text-lg'>
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact