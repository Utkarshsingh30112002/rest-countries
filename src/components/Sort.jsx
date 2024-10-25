import React, { useState,useEffect } from 'react'
import Dropdown from './Dropdown'

const Sort = ({sortOrder,setSortOrder}) => {
  function onChangeFunction(value){
    setSortOrder(value)
  }
  const data=['Ascending Area','Descending Area','Ascending Population','Descending Population']
  return (
    <Dropdown value={sortOrder} onChange={onChangeFunction} data={data} title='Sort by'/>
  )
}

export default Sort