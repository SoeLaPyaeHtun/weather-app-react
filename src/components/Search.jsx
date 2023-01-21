import React from 'react'
import { useState } from 'react'

const Search = ({fetchData}) => {

    const [ city, setCity ] = useState('')

  return (
    <div className='w-100 px-5 d-flex justify-content-center align-items-center'>
        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className='w-100 mx-3 form-control' placeholder='search'/>
        <button className='btn btn-primary' onClick={() => fetchData(city)}>search</button>
    </div>
  )
}

export default Search