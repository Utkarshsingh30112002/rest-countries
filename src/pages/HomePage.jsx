import { useState,useEffect } from "react"
import SingleCountry from "../components/SingleCountry";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [countries,setCountries]=useState([]);
    const [region,setRegion]=useState('');
    const [searchValue,setSearchValue]=useState('');
    const [resultCountries,setResultCountries]=useState([]);

    useEffect(()=>{
        async function getData(){
            let res=await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json();
            setCountries(data)
            setResultCountries(data);
        }
        getData();
    },[])
    useEffect(()=>{
       setResultCountries(countries.filter((country)=>country.region.toLowerCase()==region.toLowerCase()||region=='')
       .filter((country)=>country.name.common.toLowerCase().includes(searchValue.toLowerCase())))
    },[region,searchValue])
    
  return (
    <section className="bg-gray-200 overflow-hidden pb-10">
        <SearchBar region={region} setRegion={setRegion} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="grid grid-cols-1 md:grid-cols-4  place-items-center mx-10">{
            resultCountries.map((country,i)=>(<SingleCountry country={country} key={i}></SingleCountry>))
            }
        </div>
    </section>
  )
}

export default HomePage