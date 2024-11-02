import React, { useState } from 'react'

import axios from 'axios'
import { useEffect } from 'react'
const RickAndMortyAxios = () => {
    const [characters,setCharacters]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    const urlBase='https://rickandmortyapi.com/api/character'

    useEffect(()=>{
        const fetchCharacters=async()=>{
            setLoading(true)
            try {
                const response= await axios.get(urlBase)
                setCharacters(response.data.results)
            } catch (error) {
                setError('Error al cargar los personajes',error)
            } finally{
                setLoading(false)
            }
        }
        fetchCharacters()
    },[])


  return (
    <>
    <h1>Personajes de Rick And Morty</h1>
    {loading && <p>Cargando personajes</p>}
    {error && <p style={{color:red}}>{error}</p>}
    <ul style={{display:'flex', flexWrap:'wrap'}}>
    {characters.map(character=>(
        <li style={{margin:'10px', listStyle:'none'}}>
            <img 
            src={character.image}
            alt={character.name}
            style={{width:'150px', height:'150px', borderRadius:'10px'}}
            />
            <h3>{character.name}</h3>
            <p>Status:{character.status}</p>
            <p>Specie: {character.species}</p>
        </li>
    ))}
    </ul>

    </>
  )
}
export default RickAndMortyAxios