import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { AiOutlineMail } from 'react-icons/ai'

function MainSection(props) {
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    // exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.8 }}
    className='dark:text-white container m-auto my-14 p-4 md:p-0 md:w-1/2 left-1/2 translate-x[-50%]'>
        {/* hero */}
        <div className='my-10'>
        <h1 className='text-3xl font-bold text-center my-2'>Boughazi Akram</h1>
        <h3 className='p-2 my-2 bg-secLightBg dark:bg-secDarkBG rounded-md text-center relative left-[50%] translate-x-[-50%]'>Hello, this is Lunar Code a front end developer from Algeria.</h3>
        </div>
        {/* about */}
    <div>
        <h1 className='text-xl font-bold my-2 underline underline-offset-4 decoration-2'>About :</h1>
        <p className='text-justify'>Akram is a freelance and front end developer based in Algeria with a passion for building digital services/stuff he wants. He has a knack for all things relevant to coding, from planning and designing all the way to solving problems. When he not online, he loves hanging out reading books and sports. Currently, he's in final year in college</p>
        <h1 className='text-xl font-bold my-2 underline underline-offset-4 decoration-2'>Bio :</h1>
        <ul className=''>
            <li><b>1997</b> Born in Algeria (Guelma)</li>
            <li><b>2017</b> Bachelor degree</li>
            <li><b>2023</b> Master degree (Systeme informatique)</li>
        </ul>
        <h1 className='my-2 text-xl font-bold flex items-center underline underline-offset-4 decoration-2'>What I <BsSuitHeartFill className=' mx-2 text-pink-500'/> :</h1>
        <p className='text-justify'>Coding , Football , Music , ML , Food , Cats</p>
        <button onClick={props.toggle} className='hidden md:w-1/2 relative md:translate-x-[-50%] md:left-1/2 p-2 border-2 rounded-md border-secLightBg dark:border-secDarkBG hover:bg-secLightBg dark:text-white md:flex items-center justify-center dark:hover:bg-secDarkBG my-8'><AiOutlineMail className='dark:text-white mr-2 scale-125'/> Contact Me</button>
    </div>
    </motion.div>
  )
}

export default MainSection