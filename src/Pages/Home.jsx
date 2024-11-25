import React, { useState } from 'react'
import Button from '../Components/Common/Button'

function Home() {
  const [Movieid, setMovieid] = useState("1")

  const Handchange = (e) => {
    setMovieid(Number(e.target.value))
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700'>
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">SAMRATA MOVIE SEARCH</h1>

        {/* Description */}
        <p className="text-gray-600 text-center">
          Welcome to Samrata Movie Search! Our ambition is to simplify your movie discovery journey. Enter a unique movie ID below to find detailed information about your favorite films.
        </p>

        {/* Input Field */}
        <input 
          type="number" 
          onChange={Handchange}
          placeholder='Enter Movie ID' 
          className='w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400'
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            title="Submit" 
            color="red" 
            sizes="small"
            id={Movieid}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
