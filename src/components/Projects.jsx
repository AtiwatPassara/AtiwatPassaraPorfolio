import React from 'react'
import Horror from '../assets/horror.png'
import Tester from '../assets/tester.jpg'
import Platformer from '../assets/platformer.png'
import Fmm from '../assets/fmm.png'
import xwing from '../assets/xwing.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#cefab4] bg-[#757575]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 py-1 border-[#]'>Projects</p>
                <p className='py-6'>// Check out some of my recent projects</p>
            </div>
{/*Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                {/*Grid Item*/}
                
            <div style={{backgroundImage:`url(${Tester})` , backgroundSize: 'cover' , backgroundRepeat:'no-repeat'}}            
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                            Patient Safety PlayShare
                            </span>
                            <div >
                                <span className='text-sm'>
                            Faculty of Medicine, Chulalongkorn University
                            </span>
                            <ul className='text-sm py-1'>
                                <span className='font-bold pb-3'>Game Tester( PC and VR )</span>
                                <li>- Detect flaws and report feedback </li>
                                <li>- Follow all test cases and Intructions</li>
                                <li>- Assess the level of errors</li>

                                
                            </ul>
                            </div>
                            <div className=' font-bold'>
                                Tools - Microsoft Excel , VR
                            </div>
                        
                    </div>
                    
                
            </div>

            <div style={{backgroundImage:`url(${Platformer})` , backgroundSize: 'cover' , backgroundRepeat:'no-repeat'}}            
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                    Unity 2D Platformer (Demo)
                            </span>
                            <div >
                                <span className='text-sm'>
                            Personal Project
                            </span>
                            <ul className='text-sm py-1'>
                                <span className='font-bold pb-3'>Developer</span>
                                <li>- Level Design </li>
                                <li>- Character movement</li>
                                <li>- Create UI for lobby & In-game</li>

                                
                            </ul>
                            
                            </div>
                            <div className=' font-bold'>
                                Tools - Unity , C#
                            </div>
                        
                    </div>
                    
                
            </div>

            <div style={{backgroundImage:`url(${Horror})` , backgroundSize: 'cover' , backgroundRepeat:'no-repeat'}}            
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                            Horror Game : Repaired
                            </span>
                            <div >
                                <span className='text-sm'>
                            Personal Project
                            </span>
                            <ul className='text-sm py-1'>
                                <span className='font-bold pb-3'>3D Modeler</span>
                                <li>- Creating, Rigging and Animating </li>
                                <li>- Sculpt a monster using Blender</li>
                                

                                
                            </ul>
                            
                            </div>
                            <div className=' font-bold'>
                                Tools - Blender
                            </div>
                        
                    </div>
                    
                
            </div>

            
            <div style={{backgroundImage:`url(${Fmm})` , backgroundSize: 'cover' , backgroundRepeat:'no-repeat'}}            
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                    FindMyMine
                            </span>
                            <div >
                                <span className='text-sm'>
                            University Project
                            </span>
                            <ul className='text-sm py-1'>
                                <span className='font-bold pb-3'>Game Designer and Pixel Artist</span>
                                <li>- Design and Create Sprite of Game board</li>
                                <li>- Create VFX using VFX graph in Unity </li>
                                

                                
                            </ul>
                            
                            </div>
                            <div className=' font-bold'>
                                Tools - Unity( VFX graph ) , Pixaki
                            </div>
                            
                    </div>
                    
                
            </div>

            
            
        
            


        </div>   
    </div>
 </div>
  )
}

export default Projects