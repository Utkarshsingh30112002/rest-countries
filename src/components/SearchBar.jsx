import React from 'react'
import {FaSearch} from 'react-icons/fa'; 

const SearchBar = ({searchValue,setSearchValue,region,setRegion}) => {
    const regions = ["Africa", "Asia", "Europe", "Americas", "Oceania"];
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mx-10 mt-5 place-items-center'>
      <div className='box-border place-self-start col-span-2 ml-10 m-6 relative w-80 md:w-[500px]'>
        <FaSearch className='absolute top-5 left-10 text-gray-400'/>
      <input
        className='box-border p-4 pl-20 w-80 md:w-[500px]'
        type='text'
        placeholder='Search Country Name'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)} 
      /></div>
      <div className="col-span-1"></div>
      <select 
      className='box-border bg-white w-60 ml-20 p-5'
      value={region} 
      onChange={(e)=>setRegion(e.target.value)}  
      >
        <option value="">Filter by region</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar