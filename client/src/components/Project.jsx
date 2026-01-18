import React from 'react'
import { assets } from '../assets/assets'
import InfiniteSlider from '../utils/InfiniteSlider';

const plantyImage = [ assets.homepage, assets.categories, assets.bestseller, assets.productdetails, assets.cartpage, assets.myorders];
const trackieImage = [assets.loginpageTrackie, assets.passengerRegisterPage, assets.homepageTrackie, assets.routePage, assets.passengerTrackPage,];


const Project = () => {
  return (
     <div className='mt-14 mx-6 md:mx-[2.8rem] lg:mx-[4rem] xl:mx-[5rem]' id='projects'>
        <h1 className='inline'>Project</h1>
        <p className=' mt-4 mb-10'>This section showcases projects developed during my 4th and 6th semesters using Vanilla JavaScript, Leaflet.js for Bus Tracking System and the 
          MERN stack for Plant ecommerce system. It includes an interactive map-based application and a full-stack project demonstrating my skills 
          in frontend development, backend APIs, and database integration.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-13'>
          <div>
            <div className='bg-[#8f00ff99] py-5 pb-8 rounded-[2rem] md:w-[86%] mb-5 mx-auto'>
              <div className='flex justify-center gap-2 mb-3'>
                <h1 className='text-[#1B0044]'>Planty</h1>
                <img src={assets.Background_Planty_Logo} alt="Background Planty Logo" height={100} width={100}/> 
              </div>
              <div className='w-[238px] h-[120px] lg:w-[300px] lg:h-[180px] xl:w-[475px] xl:h-[240px] mx-auto'>
                <a href="https://planty-smoky.vercel.app" target="_blank" rel="noopener noreferrer">
                  <InfiniteSlider images={plantyImage} interval={4000}/>
                </a>
              </div>
            </div>
            <p className='mt-2'>Planty, a plant ecommerce site built using MERN stack, tailwindcss. Is used for buying and selling of plants. Here, 
              sellers can add different plants in the stock for different buyers to buy from. Users can add to cart, checkout using esewa, search for 
              plants, view plant details etc. Seller can set instock amount, set order/package status, add or remove plants.</p>
            <div className='flex items-center gap-4 mt-6'> 
              <p>Live Demo: </p>
              <a href="https://planty-smoky.vercel.app" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                <img src={assets.White_Planty_Logo} alt="White Planty Logo" height={100} width={100}/> 
                <p>https://planty-smoky.vercel.app</p>
              </a>
            </div>
          </div>

          <div>
            <div className='bg-[#8f00ff99] py-5 pb-8 rounded-[2rem] w-[86%] mb-4 mx-auto'>
              <div className='flex justify-center gap-2 mb-3'>
                <h1 className='text-[#1B0044]'>Trackie</h1>
                <img src={assets.Background_Trackie_Logo} alt="Background Trackie Logo" height={100} width={100}/> 
              </div>
              <div className='w-[125.5px] h-[240px] lg:w-[94px] lg:h-[180px] xl:w-[125.5px] xl:h-[240px] mx-auto'>
                <a href="https://trackie.is-great.net" target="_blank" rel="noopener noreferrer">
                  <InfiniteSlider images={trackieImage} interval={4000}/>
                </a>
              </div>
            </div>
            <p className='mt-2'>Trackie, a bus tracking system built using vanilla js, leaflet js, php. Is used to track current location of local buses 
              which can help passengers to get to the bus stop at the proper time. Here, Driver can use this system to provide their current location to 
              privide passengers with the current location. Users can search bus according to the route, view nearby buses etc.</p>
            <div className='flex items-center gap-4'> 
              <p>Live Demo: </p>
              <a href="https://trackie.is-great.net" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                <img src={assets.Trackie_Logo} alt="Trackie Logo" height={100} width={100}/> 
                <p>https://trackie.is-great.net</p>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project