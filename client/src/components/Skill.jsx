import React from 'react'
import { assets } from '../assets/assets';

const techs_icon = [ assets.html_icon, assets.css_icon, assets.js_icon, assets.tailwindcss_icon, assets.MongoDB_LogoSm, 
  assets.ExpressJS_LogoSm, assets.ReactJS_Logo, assets.NodeJS_Logo, assets.postman_icon, assets.mysql_icon, 
  assets.postgresql_icon, assets.C_icon, assets.java_icon, assets.linux_icon, assets.chatgpt_icon];

const techs_label = ['HTML 5', 'CSS 3', 'Js', 'Tailwindcss', 'MongoDB', 'Express JS', 'React JS', 'Node JS', 'Postman', 'MySQL', 
  'Postgresql', 'C', 'Java', 'Linux', 'Chatgpt'];
const Skill = () => {
  return (
    <div className='mt-40 md:mt-20 mx-4 md:mx-[2.8rem] lg:mx-[4rem] xl:mx-[5rem]' id='skills'>
      <h1 className='inline'>Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4'>

        <div className='bg-[#8f00ff99] p-8 md:p-10 rounded-[2rem]'>
          <div className='flex items-center gap-4 mb-2'>
            <img src={assets.MongoDB_LogoSm} alt="MongoDB Logo" height={70} width={70}/> 
            <h1 className='text-[#1B0044]'>MongoDB</h1>
          </div>
          <p>I have been using MongoDB to design flexible and scalable NoSQL data models for web applications. Through hands-on project work, I have worked with document-based data structures, CRUD operations, and schema design, gaining a practical understanding of how MongoDB supports efficient data storage and application scalability.</p>
        </div>

        <div className='bg-[#8f00ff99] p-8 md:p-10 rounded-[2rem]'>
          <div className='flex items-center gap-4 mb-2'>
            <img src={assets.ExpressJS_LogoSm} alt="Express JS Logo" height={70} width={70}/> 
            <h1 className='text-[#1B0044]'>Express</h1>
          </div>
          <p>I have been using Express.js to build backend applications and RESTful APIs. I am familiar with routing, middleware, and handling server-side logic to connect the frontend with the database. My experience with Express.js comes from developing full-stack applications where it plays a key role in backend.</p>
        </div>

        <div className='bg-[#8f00ff99] p-8 md:p-10 rounded-[2rem]'>
          <div className='flex items-center gap-4 mb-2'>
            <img src={assets.ReactJS_Logo} alt="React JS Logo" height={70} width={70}/> 
            <h1 className='text-[#1B0044]'>React</h1>
          </div>
          <p>I have been using React to develop interactive and responsive user interfaces. I am comfortable working with components, props, state, and hooks to build single-page applications. Through project-based learning, I have gained experience in creating reusable UI components and managing application state effectively.</p>
        </div>

        <div className='bg-[#8f00ff99] p-8 md:p-10 rounded-[2rem]'>
          <div className='flex items-center gap-4 mb-2'>
            <img src={assets.NodeJS_Logo} alt="Node JS Logo" height={60} width={60}/> 
            <h1 className='text-[#1B0044]'>Node</h1>
          </div>
          <p>I have been using Node.js for server-side development as part of the MERN stack. I understand how to build backend services using an asynchronous, event-driven approach and have used Node.js to handle API requests, integrate databases, and manage backend application logic.</p>
        </div>

        <div className='bg-[#8f00ff99] p-8 md:p-10 rounded-[2rem]'>
          <div className='flex items-center gap-4 mb-2'>
            <img src={assets.Python_Logo} alt="Python Logo" width={70} height={70}/> 
            <h1 className='text-[#1B0044]'>Python</h1>
          </div>
          <p>I have a basic understanding of Python and have used it to learn core programming concepts such as variables, control structures, functions, and problem-solving. Python has helped strengthen my foundation in programming and logical thinking, complementing my work in web development.</p>
        </div>
      </div> 

      <div className='mt-12'>
        <h1 className='inline'>Techs</h1>

        <div className='flex flex-wrap justify-center gap-6 md:gap-10 mt-5'>
          {techs_icon.map((tech_icon, index) => (
            <div key={index}>
              <img src={tech_icon} alt={techs_label[index]} width={100} height={100} className='mx-auto w-16 h-16 md:w-20 md:h-20'/>
              <p className='text-center text-sm mt-1'>{techs_label[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill