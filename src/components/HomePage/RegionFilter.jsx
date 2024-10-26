import React from 'react'
import Dropdown from './Dropdown';

const RegionFilter = ({region,setRegion,setSubRegion,countries}) => {
    const set=new Set();
    const regionArr = countries.reduce((acc,curr)=>{
        if(curr.region&&!set.has(curr.region)){
        acc.push(curr.region);
        set.add(curr.region);
        return acc;
        }else return acc;
      },[])
      
    function onChangeFunction(value){
        setRegion(value)
        setSubRegion('')
    }

  return (
    <Dropdown value={region} onChange={onChangeFunction} data={regionArr} title='Filter by region' />
  )
}

export default RegionFilter