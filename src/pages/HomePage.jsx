import { useState,useEffect, useRef } from "react"
import SingleCountry from "../components/SingleCountry";
import SearchBar from "../components/SearchBar";
import useFetch from "../components/hooks/useFetch.js";

const HomePage = () => {

    const [loading,setLoading]=useState(true);
    const [region,setRegion]=useState('');
    const [searchValue,setSearchValue]=useState('');
    const [subRegion,setSubRegion]=useState('')
    const [sortOrder,setSortOrder]=useState('');

    const data=useFetch('/api/all',setLoading)

    const resultCountries = data.filter((country)=>country.region.toLowerCase()==region.toLowerCase()||region=='')
    .filter((country)=>country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((country)=>((country.subregion && country.subregion.toLowerCase().includes(subRegion.toLowerCase()))||subRegion==''))
    if(sortOrder){
      if(sortOrder=='Ascending Area') (resultCountries.sort((a,b)=>a.area-b.area))
      else if(sortOrder=='Descending Area') (resultCountries.sort((a,b)=>b.area-a.area))
      else if(sortOrder=='Ascending Population')(resultCountries.sort((a,b)=>a.population-b.population))
      else if(sortOrder=='Descending Population')(resultCountries.sort((a,b)=>b.population-a.population))
    }
    
  return (
    loading? <h1>Loading</h1>:
    <section className="bg-gray-200 overflow-hidden pb-10">
        <SearchBar region={region}
         setRegion={setRegion}
         searchValue={searchValue} 
         setSearchValue={setSearchValue}
         subRegion={subRegion}
         setSubRegion={setSubRegion}
         countries={data}
         sortOrder={sortOrder}
         setSortOrder={setSortOrder}
         setResultCountries={() => {}}
        />
        <div className="grid grid-cols-1 md:grid-cols-4  place-items-center mx-10">{
            resultCountries.map((country,i)=>(<SingleCountry country={country} key={i}></SingleCountry>))
            }
        </div>
    </section>
  )
}

export default HomePage