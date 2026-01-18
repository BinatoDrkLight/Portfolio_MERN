import React from 'react'
import WheelCarouselText from '../utils/WheelCarouselText'
import { assets } from '../assets/assets'
import { useMediaQuery } from '../utils/useMediaQuery'

const About = () => {

   const sentencesA = [
    "Binesh Adhikari",
    "MERN fullstack",
    "Web developer",
    "Chess player",
    "Just Do It!",
    "Responsive UI",
    "GitHub savvy",
    "Code Lover",
  ]

    const sentencesB = [
    "Binesh Adhikari studying BCA 6th Sem",
    "Specialize in MERN full stack",
    "Provide Web development service",
    "Enjoys playing chess and guitar",
    "Subtle growth, constant learning",
    "Create responsive, user-friendly designs",
    "Proficient in GitHub, version control",
    "Passionate for programming",
  ]

  const sentencesC = [
    "I'm Binesh Adhikari studying BCA 6th Sem",
    "Specialize in MERN full stack",
    "Provide Web development service",
    "Enjoys playing chess and guitar",
    "Subtle growth, constant learning",
    "Create responsive, user-friendly designs",
    "Proficient in GitHub, version control",
    "Passionate for programming",
  ]
 
  const isVSm = useMediaQuery("(min-width: 425px)");
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1546px)");

  const isVSmOnly = isVSm && !isSm;
  const isSmOnly = isSm && !isMd;
  const isMdOnly = isMd && !isLg;
  const isLgOnly = isLg && !isXl;

  return (
    <div className='grid grid-cols-2 items-stretch md:mt-[-9rem] lg:mt-[-1rem] xl:mt-[inherit]'>
        <img src={assets.ProfilePic2} alt="Profile pic2" className='w-[16rem] md:w-[35rem] ml-[-1rem] sm:ml-[2rem] md:ml-[-1rem] lg:ml-[inherit] xl:ml-[6rem] scale-180 sm:scale-140 md:scale-100 lg:scroll-mt-[-14rem] xl:scroll-mt-[-16rem]' id='about'/>
        
        <div className='mt-[6rem] md:mt-[10rem] lg:mt-[14rem] ml-[-2rem] sm:ml-[1rem] md:ml-[-16rem] lg:ml-[-20rem] self-center'>
            {!isVSm && <WheelCarouselText className='text-xs' radius={60} sentences={sentencesA}/>}
            {isVSmOnly && <WheelCarouselText className='text-sm' radius={80} sentences={sentencesA}/>}
            {isSmOnly && <WheelCarouselText className='text-[1rem]' radius={100} sentences={sentencesA}/>}
            {isMdOnly && <WheelCarouselText className='text-[.9rem]' radius={100} sentences={sentencesB}/>}
            {isLgOnly && <WheelCarouselText className='text-[1.2rem]' radius={130} sentences={sentencesC}/>}
            {isXl && <WheelCarouselText className='text-[1.4rem]' radius={160} sentences={sentencesC}/>}  
        </div>
    </div>
  )
}

export default About