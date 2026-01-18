import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <footer className='mt-12 bg-black shadow-[0_-5px_30px_15px_rgba(143,0,255,0.5)]'>
      <div className='px-4 xl:px-8 py-4 md:pb-[inherit] lg:flex justify-between border-b w-[90%] mx-auto'>
        <div className='lg:max-w-[360px] xl:max-w-[500px] mt-3'>
          <h1>Binesh Adhikari</h1>
          <p>Full-stack developer. Let's connect for projects, collaborations, and opportunities to create modern web applications.</p><br />
          <p><em>- In case I don’t see ya, good afternoon, good evening, and good night.</em></p>
        </div>

        <div className='flex gap-11 md:gap-20 lg:gap-2 xl:gap-8 lg:pb-12 lg:ml-8 xl:ml-16 mt-6 lg:mt-[inherit]'>
          <div className='text-sm'>
            <h2 className='text-[#8f00ff]'>Quick Links</h2>
            <a href="#home">Home</a><br />
            <a href="#about">About</a><br />
            <a href="#skills">Skills</a><br />
            <a href="#projects">Projects</a><br />
            <a href="#education">Education</a><br />
            <a href="#contact">Contact</a>
          </div>

          <div className='text-sm'>
            <h2 className='text-[#8f00ff]'>Need Help?</h2>
            <a href="">Support</a><br />
            <a href="">Contact Us</a><br />
            <a href="">Blog</a><br />
            <a href="">FAQs</a>
          </div>
        </div>

        <div className='md:mb-6 lg:mb-[inherit]'>
          <h2 className='lg:ml-2 text-[#8f00ff] mt-6 lg:mt-[inherit]'>Contacts</h2>
          <p><img src={assets.gmail_icon} alt="gmail icon" className='inline w-8 h-8 mb-2'/> bineshadhikari@gmail.com</p>
          <p><img src={assets.phone_icon} alt="phone icon" className='inline w-8 h-8 mb-2'/> +977 9823820865</p>
          <a href="https://linkedin.com/in/bineshadhikari-it" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="linkedin icon" className='inline w-8 h-8 mb-2'/> linkedin.com/in/bineshadhikari-it
          </a><br />
          <a href="https://github.com/binatodrklight" target="_blank" rel="noopener noreferrer">
            <img src={assets.github_icon} alt="github icon" className='inline w-8 h-8'/> github.com/binatodrklight
          </a>
        </div>
      </div>

      <div className="py-4 lg:py-6 text-center md:text-base text-xs md:text-[inherit]">
        Copyright {new Date().getFullYear()} © BinatoDrkLight All Right Reserved.
      </div>
    </footer>
  )
}

export default Footer