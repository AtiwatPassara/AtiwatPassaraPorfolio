import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#5e5e5d]'>

      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 text-white'>
                 <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 pb-1 border-[#b3e961]'>
                      About
                    </p>
                 </div>

                 
        </div>

        <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 text-white px-4'>
                  <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi! I'm <span className='text-[#d6ff99]'>Atiwat</span>, nice to meet. Please take a look on my <span className='text-[#f3f347]'>Portfolio!</span></p>
                  </div>

                  <div className='text-xl'>
                        <p>I am passionate about analyzing data and discovering new insights. 
                          I have gained experience through personal and university programming projects. 
                          As a student, I am eager to learn more about the field of data analysis and would welcome the opportunity to contribute to projects and expand my skills.
                        </p>
                  </div>
        </div>

        
        
        


      </div>

    </div>  
  )
}

export default About