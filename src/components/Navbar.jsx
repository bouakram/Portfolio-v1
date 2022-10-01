import React, {useState } from 'react'
import sun from '../img/Icons/sun.png'
import moon from '../img/Icons/moon.png'
import luna from '../img/Icons/crescent-moon.png'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'

import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const [toggleicon , setToggleIcon] = useState(moon)
    const [toggleMenu , setToggleMenu] = useState(false)
    const toggleIcons = ()=>{
        if (toggleicon === moon) {
            setToggleIcon(sun)
        }
        else setToggleIcon(moon)
    }
    const toggleMenus = ()=>{
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
  return (
    <div className='fixed w-screen top-0 z-10 backdrop-blur-sm bg-lightBG/30 p-2 dark:bg-darkBG/30'>
    <nav className='relative flex justify-between items-center container m-auto'>
        {/* logo */}
        <div className="flex space-x-16">
            <Link to='/'><h1 className='flex items-center dark:text-white cursor-pointer'>Lunar<span><motion.img whileHover={{scale : 1.1 , rotate : [0 , 30]}} transition={{duration : 0.2}} className='ml-3 mr-1 h-4 w-4' src={luna} alt="" /></span>ode</h1></Link>
        {/* links */}
        <div>
            <ul className='hidden md:flex space-x-4'>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'><Link to="portfolio"> work</Link></li>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'><a href="https://github.com/bouakram" target='_blank' rel="noreferrer" className='flex items-center'><FaGithub />code</a></li>
            </ul>
        </div> 
        </div>
        {/* dark mode toggle */}
        <div>
            <button className='' onClick={()=>{
                props.darkMode()
                toggleIcons()
            }}><motion.img whileHover={{rotate : 100}} transition={{duration : 0.5 , ease : 'easeInOut'}} className='h-5 w-5' src={toggleicon} alt="moon" /></button>
            {/* menu */}
            <button onClick={toggleMenus} className='ml-3 border border-darkBG dark:border-white p-1 rounded-md md:hidden'>{toggleMenu ? <AiOutlineClose className='dark:text-white'/> : <FiMenu className='dark:text-white'/>}</button>
        </div>
        {/* links in mobile device */}
        { toggleMenu ?
        <div className='transition-all duration-150 ease-out translate-x-0 opacity-1 absolute p-1 rounded-md h-auto w-1/4 right-0 top-9 bg-secLightBg dark:bg-secDarkBG md:hidden'>
        <ul className='flex flex-col'>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'>work</li>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'><a href="https://github.com/bouakram" target='_blank' rel="noreferrer" className='flex items-center'><FaGithub />code</a></li>
            </ul>
        </div>
        :
        <div className='transition-all duration-150 ease-out translate-x-full opacity-0 absolute p-1 rounded-md h-auto w-1/2 right-0 top-9 bg-secLightBg dark:bg-secDarkBG md:hidden'>
        <ul className='flex flex-col'>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'>work</li>
                <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 cursor-pointer'><a href="https://github.com/bouakram" target='_blank' rel="noreferrer" className='flex items-center'><FaGithub />code</a></li>
            </ul>
        </div>
        } 
    </nav>
    </div>
  )
}

export default Navbar