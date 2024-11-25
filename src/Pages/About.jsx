import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  
  const OMDBLink = import.meta.env.VITE_PUBLIC_OMDB_URL
  const APIkey = import.meta.env.VITE_OMDB_API

  // Fetch movie by ID
  async function fetchMovie() {
    try {
      const response = await fetch(`${OMDBLink}/?i=tt${id}&apikey=${APIkey}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  // Fetch movie by title
  async function searchMovieByTitle() {
    try {
      const response = await fetch(`${OMDBLink}/?t=${title}&apikey=${APIkey}`)
      const result = await response.json()
      setData(result)
      setShowPopup(true) // Show popup with movie data
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    if (id) fetchMovie()
  }, [id])

  // Helper to fetch character images (mock or placeholder)
  const getCharacterImage = (name) => {
    const baseUrl = 'https://ui-avatars.com/api/';
    return `${baseUrl}?name=${encodeURIComponent(name)}&background=random&rounded=true`;
  };

  return (
    <div className='flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen'>
      <h1 className="text-3xl font-bold text-gray-800">Movie Search</h1>
      <p className="text-lg text-gray-500">Search for a Movie by Title Name...</p>

      {/* Search Input */}
      <div className='flex items-center w-full max-w-lg space-x-2'>
        <input 
          type='text' 
          className='flex-grow p-3 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400' 
          onChange={handleChange} 
          placeholder='Search by title' 
        />
        <button 
          className='p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2' 
          onClick={searchMovieByTitle}
        >
          Search
        </button>
      </div>

      {/* Card Format */}
      {data && (
        <div className='bg-white rounded-lg shadow-md p-6 max-w-xl w-full'>
          <div className='flex flex-col items-center'>
            <img 
              src={data.Poster} 
              alt="Movie Poster" 
              className='w-full max-w-sm rounded-lg shadow-lg mb-4' 
            />
            <h2 className='text-2xl font-bold text-gray-800'>{data.Title}</h2>
            <p className="mt-4 text-gray-600">
              <span className="font-semibold text-gray-800">Synopsis: </span>
              {data.Plot || "No synopsis available."}
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-semibold text-gray-800">Director: </span>
              {data.Director || "No director information available."}
            </p>
            <div className="mt-6 w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.Actors 
                  ? data.Actors.split(', ').map((actor) => (
                    <div key={actor} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                      <img 
                        src={getCharacterImage(actor)} 
                        alt={`${actor} Profile`} 
                        className="w-20 h-20 rounded-full shadow-lg border border-gray-300 mb-2"
                      />
                      <p className="text-center text-sm font-medium text-gray-700">{actor}</p>
                    </div>
                  ))
                  : <p>No cast information available.</p>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
