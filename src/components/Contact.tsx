import linkedIn from '/linkedIn.svg'

function Contact() {
  return (
    <div id="contact" className='h-[50vh] bg-blackSecondary flex flex-col justify-center items-center'>
      <h3 className='sm:text-5xl text-4xl font-semibold'>Contatos</h3>
      <p className='text-center mt-6 mb-10 sm:text-xl text-sm'>
        Se quiser realizar um projeto ou conversar <br /> comigo, me mande um email: <br />
        <span className='text-blue-500 underline'>danilocbertolini@gmail.com</span>
      </p>
      <div>
        <div className='sm:h-14 h-11 sm:w-40 w-32 rounded-lg bg-gradient-to-r from-blueGradient to-purpleGradient p-[2px]'>
          <button className='h-full w-full items-center justify-center bg-blackPrimary back rounded-md flex'>
            <img src={ linkedIn } alt="linkedIn logo" className='sm:w-8 w-7' />
            <a href="https://www.linkedin.com/in/danilobertolini/" target='_blank' className='pl-2 sm:text-lg text-md'>
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact