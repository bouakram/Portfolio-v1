import React from 'react'
import bondi from '../img/project/bondi.png'
import manage from '../img/project/manage.png'
import tiping from '../img/project/tiping.png'

import {IoEyeSharp} from 'react-icons/io5'
import {FiGithub} from 'react-icons/fi'

import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Portfolio() {
    /*  
    
    */

        const PortfolioData = [
            {
                img : bondi,
                title : "Bondi Landing Page",
                disc : "Landing Page named bondi i re coded it from a psd found in the web",
                vieIcons : "IoEyeSharp",
                vulink : "https://github.com/bouakram/bootstrap-frontend-template",
                gitIcons : "FiGithub",
                gitLink : "https://bouakram.github.io/bootstrap-frontend-template/"
            },
            {
                img : manage,
                title : "Manage Landing Page",
                disc : "Landing Page named Manage i re coded it from a psd found in the web i used react and tailwindcss.",
                vieIcons : "IoEyeSharp",
                vulink : "https://github.com/bouakram/tailwind-project",
                gitIcons : "FiGithub",
                gitLink : "https://62d30bf8200b4b3bdc63e8e9--silver-speculoos-53e894.netlify.app/"
            },
            {
                img : tiping,
                title : "Tiping Game",
                disc : "This is a tiping game simple version coded by javaScript",
                vieIcons : "IoEyeSharp",
                vulink : "https://bouakram.github.io/Typing-Game/",
                gitIcons : "FiGithub",
                gitLink : "https://github.com/bouakram/Typing-Game"
            },
        ]

        const PortfolioComponents = PortfolioData.map((data)=>{
            return (
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
            className='shadow-md'>
                <img className='rounded-md' src={data.img} alt="project one" />
                <h1 className='font-bold my-2 px-1 text-center'>{data.title}</h1>
                <p className='font-light my-2 px-1 text-center'>{data.disc}</p>
                <div>
                    <ul className='flex justify-center space-x-2 bottom-0'>
                        <li><button className='hover:bg-secLightBg dark:hover:bg-secDarkBG p-2 rounded-md'><a href={data.vulink} target='_blank' rel="noreferrer" className='flex items-center'><IoEyeSharp className='mr-2'/> View</a></button></li>
                        <li><button className='hover:bg-secLightBg dark:hover:bg-secDarkBG p-2 rounded-md'><a href={data.gitLink} target='_blank' rel="noreferrer" className='flex items-center'><FiGithub className='mr-2'/> Github</a></button></li>
                    </ul>
                </div>
            </motion.div>
            )
        })





  return (
    <div className='dark:text-white container m-auto mt-5 p-4 md:p-0 md:w-1/2 left-1/2 translate-x[-50%]'>
        <h1 className='text-xl font-bold my-2 underline underline-offset-4 decoration-2'>My Portfolio :</h1>
        <p className='text-justify my-2'>Here some of my work you can finde more <Link to='/portfolio'><span className='text-indigo-600 dark:text-violet-600 underline cursor-pointer'>here</span></Link></p>
    {/* card */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
       {PortfolioComponents}
    </div>
    </div>
  )
}

export default Portfolio