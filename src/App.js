import {useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import MainPortfolio from './components/MainPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkmode , setDarkMode] = useState("")
  const [open , setOpen] = useState(false)
  const toggleDarkMode = ()=>{
    if (darkmode === "dark") {
      setDarkMode("")
    } else if (darkmode === ""){
      setDarkMode("dark")
    }
    console.log(darkmode)
  }
  const toggleForm = ()=>{
    setOpen(!open)
  }



  return (
    <div className={darkmode}>
    <div className=' bg-lightBG dark:bg-darkBG overflow-hidden  min-h-screen'>
      <Navbar darkMode={toggleDarkMode}/>
      <Routes>
      <Route path='/' element={<Home opened={open} toggle={toggleForm}/>} />
      <Route path='/portfolio' element={<MainPortfolio />}/>
      </Routes>
      <Contact opened={open} toggle={toggleForm}/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
