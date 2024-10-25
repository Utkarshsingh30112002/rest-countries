import React from 'react'
import Dropdown from './Dropdown';

const SubRegionFilter = ({countries,subRegion,setSubRegion,region}) => {
    let set=new Set();
    const subRegionArr= countries.reduce((acc,curr)=>{
    if((!region&&curr.subregion)||(curr.region==region&&curr.subregion&&!set.has(curr.subregion))){
    acc.push(curr.subregion);
    set.add(curr.subregion);
    return acc;
    }else{ 
      return acc;
    }
  },[])

  function onChangeFunction(value){
    setSubRegion(value)
  }

  return (
    <Dropdown data={subRegionArr} value={subRegion} onChange={onChangeFunction} title='Filter by subregion' />
  )
}

export default SubRegionFilter