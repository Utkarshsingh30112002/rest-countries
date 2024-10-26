import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'; 
import SubRegionFilter from './SubRegionFilter';
import Sort from './Sort';
import RegionFilter from './RegionFilter';

const SearchBar = ({searchValue,setSearchValue,region,setRegion,subRegion,setSubRegion,countries,setResultCountries,sortOrder,setSortOrder}) => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-2 md:mx-10 mt-5 place-items-center lg:gap-5 md:gap-5 gap-3'>
      <div className='box-border place-self-center xl:place-self-start md:col-span-3 xl:col-span-2 ml-10 m-2 md:m-6 relative '>
        <FaSearch className='absolute top-5 left-10 text-gray-400 text-LMT dark:text-DMT'/>
      <input
        className='box-border p-4 pl-20   md:pr-80 xl:pr-36 xl:pl-20 bg-LME text-DMT dark:bg-DME dark:text-DMT w-11/12'
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