import React, { useState } from 'react'
import Button from '../Components/Common/Button'



function Home() {
  const [Movieid, setMovieid]=useState("1")
    const [Error,setError] =useState()
    
    
    const Handchange =(e)=> {
      setMovieid(Number(e.target.value))
      console.log(Number)
    }
      
    
  return (
 
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 space-y-4 '>
       <h1 className="text-lg text-white-500">Search for a Movie Id Number...</h1>
      <input type="number" 
      onChange={Handchange}
      placeholder='Enter Movie Id'
      className='w-full max-w-xs p-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-400'/>
      
      <Button  title="submit" color="red" sizes="small"
      id={Movieid}/>
    
    </div>
  )
}

export default Home
