import React from 'react'

const SingleCountry = ({country}) => {
  return (
    <div className="bg-white mt-5 pb-5 rounded-md w-80">
        <img className="w-80 h-40" src={country.flags.png}/>
        <div className='ml-5 my-3'>
        <h1 className='font-bold'>{country.name.common}</h1>
        <h3><p className='font-medium inline'>Population:</p> {country.name.common}</h3>
        <h3><p className='font-medium inline'>Region</p>:{country.region}</h3>
        <h3><p className='font-medium inline'>Capital:</p> {country.capital}</h3>
        </div>
        
    </div>
  )
}

export default SingleCountry