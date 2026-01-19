import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useState } from 'react';
import toast from 'react-hot-toast';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {

  const { axios } = useAppContext();

  const [mail, setMail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e)=>{
        const {name, value} = e.target;

        setMail((prevMail)=>({
            ...prevMail,
            [name]: value,
        }))
    }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  if (Object.values(mail).some(v => v.trim() === '')) {
    return toast.error("Fill up all the fields in the form");
  }

  if (!emailRegex.test(mail.email)) {
    return toast.error("Email address invalid");
  }

  try {
    const {data} = await axios.post('/api/contact/send-message', {mail});
      if(data.success){
        toast.success(data.message)
        setMail({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
    } else {
        toast.error(data.message)
    }
  } catch (error) {
      toast.error(error.message)
  }
}

  return (
     <div className='mt-10 mx-2 md:mx-[2.6rem] lg:mx-[4rem] xl:mx-[5rem]' id='contact'>
        <h1 className='inline'>Contact</h1>
        <form onSubmit={onSubmitHandler} className='text-center mt-1'>
          <div className='flex gap-6 justify-center'>
            <input onChange={handleChange} name='firstName' value={mail.firstName} type="text" placeholder='First Name'/>
            <input onChange={handleChange} name='lastName' value={mail.lastName} type="text" placeholder='Last Name'/>
          </div>
          <input onChange={handleChange} name='email' value={mail.email} type="text" placeholder='Email'/><br />
          <textarea onChange={handleChange} name='message' value={mail.message} placeholder='Message'></textarea><br />
          <button className='border rounded-xl rounded-r-[10rem] px-4 py-2 mt-2' type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact