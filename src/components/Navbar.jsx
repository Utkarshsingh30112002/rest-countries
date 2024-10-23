import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <div className='font-bold mt-7 mb-7 ml-20 text-2xl'><h1>Where in the world?</h1></div>
        <div className='mr-20'><button>Dark Mode</button></div>
    </nav>
  )
}

export default Navbar