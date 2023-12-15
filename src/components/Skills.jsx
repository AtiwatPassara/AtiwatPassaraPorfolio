import React from 'react'
import HTML from '../assets/html.png'
import GitHub from '../assets/github.png'
import Unity from '../assets/unity.png'
import Blender from '../assets/Blender.png'
import Python from '../assets/Python.png'
import Java from '../assets/Java.png'
import Csharp from '../assets/C#.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#545353]'>
    <div name='skills' className=' max-w-[1200px] mx-auto bg-[#363636] w-full h-screen flex flex-col justify-center items-center text-[#bfdd92]'>
      <div>
        <div>
          <p className='text-6xl font-bold inline border-b-4 border-white py-1  '>
            Skills
          </p>
          <p className='py-7 text-lg'>// These are the Tools and Languages I've worked with.</p>
        </div>

        <div className=' md:w-[1000px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 w-full '>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className='mx-auto' src={Java} alt="Html Icon" />
            <p className='my-4 '>Java</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={Python} alt="Python Icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className='mx-auto' src={Csharp} alt="c# Icon" />
            <p className='my-1 '>C#</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={HTML} alt="Blender Icon" />
            <p className='my-3 '>HTML</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={Unity} alt="Unity Icon" />
            <p className='my-6 '>Unity</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={GitHub} alt="Github Icon" />
            <p className='my-6 '>Git Hub</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={Blender} alt="Blender Icon" />
            <p className='my-7 '>Blender</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img  style={{ width: '80px' }} className=' mx-auto' src={Tailwind} alt="Tailwind Icon" />
            <p className='my-6 '>Tailwind</p>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills