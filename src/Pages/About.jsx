import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const [title, setTitle] = useState('')
  
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
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    if (id) fetchMovie()
  }, [id])

  return (
    <div className='flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen'>
      <h1 className="text-3xl font-bold text-gray-800">
        Movie Search <span className="text-blue-600">{id ? `ID: ${id}` : ''}</span>
      </h1>
      <p className="text-lg text-gray-500">Search for a Movie by Title Name...</p>

      {/* Display Movie Data */}
      {data ? (
        <div className='text-center'>
          <p className="text-2xl font-semibold text-gray-700 mb-4">{data.Title}</p>
          {data.Poster && (
            <img src={data.Poster} alt="Movie Poster" className='w-full max-w-md rounded-lg shadow-lg border-2 border-gray-200' />
          )}
          <p className="mt-4 text-lg text-gray-600">
            <span className="font-semibold text-gray-800">Synopsis: </span>
            {data.Plot || "No synopsis available."}
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold text-gray-800">Actors: </span>
            {data.Actors || "No cast information available."}
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold text-gray-800">Director: </span>
            {data.Director || "No director information available."}
          </p>
          {data.Poster && (
            <a 
              href={data.Poster} 
              download={`${data.Title}-Poster.jpg`} 
              className='mt-4 inline-block p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
            >
              Download Poster
            </a>
          )}
        </div>
      ) : (
        <p className="text-lg text-gray-500">Loading movie data...</p>
      )}

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
    </div>
  )
}

export default About
