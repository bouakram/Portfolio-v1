import React from 'react'
import {FaTwitter , FaGithub , FaLinkedinIn} from 'react-icons/fa'
import {motion} from 'framer-motion'

function FindMe() {
  return (
    <motion.div 
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    // exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.8 }}
    className='dark:text-white container m-auto my-14 p-4 md:p-0 md:w-1/2 left-1/2 translate-x[-50%]'>
        <h1 className='text-xl font-bold'>Find Me :</h1>
        <ul className=''>
            <li className='w-1/2 hover:bg-secLightBg dark:hover:bg-secDarkBG p-2 rounded-md'><button className='flex space-x-2 items-center'><FaTwitter /> <a href="https://twitter.com/akrem_QLF" target='_blank' rel="noreferrer">@akrem_QLF</a></button></li>
            <li className='w-1/2 hover:bg-secLightBg dark:hover:bg-secDarkBG p-2 rounded-md'><button className='flex space-x-2 items-center'><FaGithub /><a href="https://github.com/bouakram" target='_blank' rel="noreferrer">bouakram</a></button></li>
            <li className='w-1/2 hover:bg-secLightBg dark:hover:bg-secDarkBG p-2 rounded-md'><button className='flex space-x-2 items-center'><FaLinkedinIn /><a href="https://www.linkedin.com/in/akram-boughazi-b3956a212/" target='_blank' rel="noreferrer">Akram Boughazi</a></button></li>
        </ul>
    </motion.div>
  )
}

export default FindMe