import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <header>
        <nav className='flex top-0 justify-around items-center bg-black text-lg py-2 h-24 w-full shadow-[0_5px_30px_10px_rgba(143,0,255,0.5)]' id='home'>
            <h1 className='flex items-center gap-1'>
              <img src={assets.BDL_Purple_Logo} alt={assets.BDL_Purple_Logo} className='h-12 sm:h-16 lg:h-18 xl:20'/>
              <a href="#" className='text-2xl sm:text-4xl lg:text-5xl'>Portfolio</a>
            </h1>
            <ul className='hidden md:flex md:gap-5 lg:gap-6'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className='border-0 md:hidden'>
              <img src={assets.Menu_Icon} alt="menu icon" className="w-8"/>
            </button>

             { open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] right-0 w-[30%] bg-black/50 py-4 flex-col items-start gap-2 px-5 text-xs md:hidden z-5`}>
                  <a href='#home' onClick={ ()=> setOpen(false)}>Home</a>
                  <a href='#about' onClick={ ()=> setOpen(false)}>About</a>
                  <a href='#skills' onClick={ ()=> setOpen(false)}>Skills</a>
                  <a href='#projects' onClick={ ()=> setOpen(false)}>Projects</a>
                  <a href='#education' onClick={ ()=> setOpen(false)}>Education</a>
                  <a href='#contact' onClick={ ()=> setOpen(false)}>Contact</a>  
                </div>
              )}
        </nav>
    </header>
  )
}

export default Navbar