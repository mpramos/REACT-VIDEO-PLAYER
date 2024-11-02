import React, { useEffect, useState } from 'react'

const RickAndMortyFetch = () => {
    const [personajes,setPersonajes]=useState([])

    const urlBase='https://rickandmortyapi.com/api/character'

    useEffect(()=>{
        const obtPersonajes=async()=>{
            const data= await fetch(urlBase)
            const respuesta=await data.json()//undefined
            const results= await respuesta.results
            console.log(results);
            setPersonajes(results)
        }
        obtPersonajes()

    },[])

  return (
   <>
    <h1> Rick And Morty ✨</h1>
        {personajes.map(personaje=>(
            <>
                <h2>{personaje.name}</h2>
                <img
                 src={personaje.image}
                 alt={personaje.name} 
                 style={{margin:'10px',borderRadius:'8px', height:'150px'}}
                 />
                <p>Status: {personaje.status}</p>
            </>
        ))}
   </>
  )
}

export default RickAndMortyFetch