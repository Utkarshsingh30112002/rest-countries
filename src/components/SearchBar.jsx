import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'; 
import SubRegionFilter from './SubRegionFilter';
import Sort from './Sort';
import RegionFilter from './RegionFilter';

const SearchBar = ({searchValue,setSearchValue,region,setRegion,subRegion,setSubRegion,countries,setResultCountries,sortOrder,setSortOrder}) => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 mx-10 mt-5 place-items-center'>
      <div className='box-border place-self-start col-span-2 ml-10 m-6 relative w-80 md:w-[500px]'>
        <FaSearch className='absolute top-5 left-10 text-gray-400'/>
      <input
        className='box-border p-4 pl-20 w-80 md:w-[500px]'
        type='text'
        placeholder='Search Country Name'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)} 
      /></div>
      <RegionFilter region={region} setRegion={setRegion} setSubRegion={setSubRegion} countries={countries}/>
      <SubRegionFilter subRegion={subRegion} setSubRegion={setSubRegion} countries={countries} region={region}/>
      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} setResultCountries={setResultCountries}/>
    </div>
  )
}

export default SearchBar