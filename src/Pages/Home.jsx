import React, { useState } from 'react'
import Button from '../Components/Common/Button'

function Home() {
  const [Movieid, setMovieid] = useState("1")
  const [Error, setError] = useState()

  const Handchange = (e) => {
    setMovieid(Number(e.target.value))
    console.log(Number)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 space-y-6'>
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white">SAMRATA MOVIE SEARCH</h1>

      {/* Description */}
      <p className="text-lg text-gray-200 max-w-2xl text-center">
        Welcome to Samrata Movie Search! Our ambition is to make it easy for you to find movies by their unique ID. 
        Enter a movie ID below and discover detailed information about your favorite films.
      </p>

      {/* Input Field */}
      <input 
        type="number" 
        onChange={Handchange}
        placeholder='Enter Movie ID' 
        className='w-full max-w-xs p-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-400'
      />

      {/* Submit Button */}
      <Button 
        title="Submit" 
        color="red" 
        sizes="small"
        id={Movieid}
      />
    </div>
  )
}

export default Home
