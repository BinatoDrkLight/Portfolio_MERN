import React from 'react'
import '../index.css';
import { assets } from '../assets/assets';

const Home = () => {
  return ( 
    <div className='mt-30 lg:mt-42 xl:mt-30 flex justify-around'>
        <div className='mt-[-1rem] ml-4 md:mt-10 xl:mt-50 md:ml-6'>
            <h1 className='w-10 xl:w-[inherit]'>Greetings Visitor</h1>
            <a href={assets.Portfolio_MERN_CV} target="_blank" rel="noopener noreferrer"><button className='ml-2rem xl:ml-10 mt-1 xl:mt-inherit'>See CV</button></a>
        </div>

        <div className='mt-30 md:mt-30 xl:mt-50 ml-[-5rem] md:ml-[-4rem]'>
            <h1 className='w-40 xl:w-[inherit]'>I'm Binesh Adhikari</h1>
            <p>Passionate MERN developer</p>
        </div>

        <div className='mt-[-3rem] md:mt-[-5rem] xl:mt-[-6rem] ml-[-6rem] w-[10rem] sm:w-[12rem] md:w-[16rem] lg:w-[20rem] xl:w-[28rem] h-auto'>
          <img src={assets.ProfilePic11} alt="Profile pic11" />
        </div>
    </div>
  )
}

export default Home