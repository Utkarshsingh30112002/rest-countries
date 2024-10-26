import React, { useEffect, useState } from 'react'
import  {FaSun,FaMoon}  from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dark,setDark]=useState(null);
  function darkModeHandler(){
    setDark(!dark)
  }
  useEffect(()=>{
    if(dark){
      localStorage.setItem('dark','true');
      document.body.classList.add('dark');
    }
    else if(dark===false) {
      localStorage.setItem('dark','false');
      document.body.classList.remove('dark');
    }
    else setDark('true'===localStorage.getItem('dark'))
  },[dark])
  return (
    <nav className='flex justify-between items-center shadow bg-LME dark:bg-DME px-10 md:px-20'>
        <div className='font-bold mt-7 mb-7 text-xl md:text-2xl text-LMT dark:text-DMT'><Link to={'./'}><h1>Where in the world?</h1></Link></div>
        <div className=' text-LMT dark:text-DMT'><button onClick={darkModeHandler}>{dark?<><FaMoon className='inline mr-1 mb-1'/>DarkMode</>:<><FaSun className='inline mr-1'/>LightMode</>}</button></div>
    </nav>
  )
}

export default Navbar