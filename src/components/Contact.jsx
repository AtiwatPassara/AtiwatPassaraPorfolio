import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#6b6a6a] flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/8f7de4ea-0f13-4097-9087-7814c56993a6" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-6'>
              <p className='text-4xl font-bold inline border-b-4 border-b-white text-[#d6ff99] pb-2'>Contact</p>
              <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <span className='text-xl font-bold text-[#d6ff99]'>act22040@gmail.com</span></p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder="Message"></textarea>
          <button className='text-white border-2 hover:bg-[#d6ff99] hover:text-[#5b7b5c] duration-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>



        </form>
    </div>
  )
}

export default Contact