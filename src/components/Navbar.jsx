import React, {useState} from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import { TbMail } from "react-icons/tb";
import { FaSquareGithub,FaLinkedin,FaEnvelope } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div name='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#88ba3d] text-[#ffffff] text-2xl'>
      
      <div>

      </div>

      <div>
        <ul className='hidden md:flex space-x-10'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      {/* hamberger*/}
      <div onClick={handleClick} className='mr-8 md:hidden z-10'> {/* Add margin-left here */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile Menu*/}
      
      <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#5e5e5d] text-[#ffffff] flex flex-col justify-center items-center text-center z-10'} >
          <li className='text-4xl py-8' ><Link to="home" smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
          <li className='text-4xl py-8' ><Link to="about" smooth={true} duration={500} onClick={handleClick}>About</Link></li>
          <li className='text-4xl py-8' ><Link to="skills" smooth={true} duration={500} onClick={handleClick}>Skills</Link></li>
          <li className='text-4xl py-8' ><Link to="projects" smooth={true} duration={500} onClick={handleClick}>Projects</Link></li>
          <li className='text-4xl py-8' ><Link to="contact" smooth={true} duration={500} onClick={handleClick}>Contact</Link></li>

          
          
      </ul>

      {/* Social Contact*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
          <ul>
            <li className='flex justify-between w-[170px] h-[60px] ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
              <a className= 'flex justify-between items-center w-full text-2xl' href="https://www.linkedin.com/in/atiwat-passara-333977298/" target="_blank" > 
                Linkedin<FaLinkedin size={30} />
              </a>         
            </li> 
            
            <li className='flex justify-between w-[170px] h-[60px] ml-[-110px] hover:ml-[-10px] duration-300 bg-[#000000]'>
              <a className= 'flex justify-between items-center w-full text-2xl' href="https://github.com/AtiwatPassara" target="_blank" > 
                Github<FaSquareGithub  size={30}/>
              </a>             
            </li>
            <li className='flex justify-between w-[350px] h-[60px] ml-[-290px] hover:ml-[-10px] duration-300 bg-[#cc4545]'>
              <p className= 'flex justify-between items-center w-full text-2xl' > 
                act22040@gmail.com<FaEnvelope size={30} />
              </p>
             
             
            </li>

            <li className='flex justify-between w-[170px] h-[60px] ml-[-110px] hover:ml-[-10px] duration-300 bg-[#88ba3d]'>
              <a className= 'flex justify-between items-center w-full text-2xl' href="https://www.canva.com/design/DAF2vSK89TE/ItPAwZU3ZWVnmeDP-2Hr_g/view?utm_content=DAF2vSK89TE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"> 
                Resume<BsFillPersonLinesFill size={30} />
              </a>
             
             
            </li>

            

            





          </ul>

      </div>
      
    </div>
  );
};

export default Navbar;
