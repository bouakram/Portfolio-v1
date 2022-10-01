import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import {AiOutlineMail} from 'react-icons/ai'

function Contact(props) {
const form = useRef();

const [HasSend , setHasSend] = useState(false)
const [Error , setError] = useState(false)
const [errormess , seterrormess] = useState('')


const toggleSend = ()=>{setHasSend(false)}
const toggleError = ()=>{setError(false)}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtyz4yc', 'template_d10ch3q', form.current, 'm92o2laScoEBZLNBQ')
      .then((result) => {
          console.log(result.text);
          setHasSend(true)
      }, (error) => {
          console.log(error.text);
          seterrormess(error.text)
          setError(true)
      });
  };
  return (<div className=''>
    {props.opened ? null :<motion.button onClick={props.toggle} className='md:hidden fixed bottom-1 right-1 z-10 rounded-full bg-secLightBg p-4 dark:bg-secDarkBG dark:text-white'><AiOutlineMail className='dark:text-white'/></motion.button>}
      {props.opened ? <div className=''>
      <motion.form initial={{x : 0 , y : 0 , opacity : 0 , scale : 0.2}} animate={{opacity : 1 , scale : 1}} transition={{duration : 0.3 , ease : 'easeInOut'}} ref={form} onSubmit={sendEmail} className='z-20 fixed top-0 flex justify-center flex-col w-full h-full  bg-secLightBg dark:bg-secDarkBG dark:text-slate-300 md:py-10 md:px-52 p-10 rounded-md '>
        <input type="text" name="user_name" placeholder='Name' className='mb-4 focus:outline-none   bg-transparent border-b-2 placeholder:italic placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:bg-secDarkBG dark:text-slate-300 focus:rounded-md' />
        <input type="email" name="user_email" placeholder='you@gmail.com' className='peer invalid:focus:ring-pink-600 invalid:focus:border-b-pink-600 focus:outline-none  bg-transparent border-b-2 placeholder:italic placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:bg-secDarkBG0 dark:text-slate-300 focus:rounded-md' />
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
        <textarea name="message" placeholder='Message' className='focus:outline-none   bg-transparent border-b-2 placeholder:italic placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:bg-secDarkBG dark:text-slate-300 focus:rounded-md' />

        <motion.button whileTap={{ scale: 0.97 }} className='p-2 mt-4 bg-lightBG rounded-md dark:bg-darkBG hover:shadow-lg'><input type="submit" value="Send" className='cursor-pointer dark:text-slate-300' /></motion.button>
        <motion.button whileTap={{ scale: 0.97 }} onClick={()=>{props.toggle() 
            toggleSend()
            toggleError()}} className='p-2 mt-4 ring-1 ring-indigo-500 rounded-md hover:shadow-lg '>Close</motion.button>
        {HasSend ? <p className='text-green-500 font-light'> your message has sent successfully . i will reply you soon</p> : null}
        {Error ? <p className='text-pink-600 font-light'> Opps !! there is a probleme , please try againe later <small>{errormess}</small></p> : null}
      </motion.form></div> : null}
</div>
  )
}

export default Contact