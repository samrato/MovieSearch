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
 
    <div>
      <input type="number" 
      onChange={Handchange}
      placeholder='enter movie id'/>
      
      <Button title="submit" color="red" sizes="small"
      id={Movieid}/>
    
    </div>
  )
}

export default Home
