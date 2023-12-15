import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='bg-[#5e5e5d] w-full h-screen'>

      {/*Container*/}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full space-y-3'>
        <h2 className='text-white text-2xl'>Hi, my name is</h2>
        <h1 className='text-4xl sm:text-7xl text-[#d6ff99] font-bold'>Atiwat Passara</h1>
        <p className='text-4xl sm:text-7xl text-[#a7c777] font-bold '>I'm an Engineering Student</p>
        <p className='text-xl md:text-2xl text-white font-bold py-5'>I'm an undergraduated <span className='text-[#b5e9ff]  text-2xl sm:text-3xl font-bold'>Information and Communication Engineering</span> student at Chulalongkorn University. 
            I am a <span className='text-[#edf08b] text-2xl sm:text-3xl font-bold py-4 max-w-[700]'>Self-Motivate</span> and <span className='text-[#99ffe9]  text-2xl sm:text-3xl font-bold'>Open-Minded</span> person.
            <br /> Moreover, I am enthusiastic about delving into the field of <span className='text-[#d6ff99]  text-2xl sm:text-3xl font-bold'>Data Analyst </span> . </p> 
        <div>
          <button className='text-white border-4 px-6 py-3 my-1 text-2xl flex items-center hover:bg-[#738558] duration-200'>View Works &nbsp;  <HiArrowNarrowRight /></button>
        </div>  
           
        

      </div>

    </div>
  )
}

export default Home