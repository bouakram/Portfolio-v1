import {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import MainPortfolio from './components/MainPortfolio';

function App() {
  const [darkmode , setDarkMode] = useState("")
  const toggleDarkMode = ()=>{
    if (darkmode === "dark") {
      setDarkMode("")
    } else if (darkmode === ""){
      setDarkMode("dark")
    }
    console.log(darkmode)
  }

  return (
    <div className={darkmode}>
    <div className='bg-lightBG dark:bg-darkBG overflow-hidden'>
      <Navbar darkMode={toggleDarkMode}/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/portfolio' element={<MainPortfolio />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
