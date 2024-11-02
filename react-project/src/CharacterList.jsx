import React from 'react'
import useRickAndMorty from './useRickAndMorty'

function CharacterList() {
    const url='https://rickandmortyapi.com/api/character'
    const {data,loading,error}=useRickAndMorty(url)
    if(loading) return <p> Cargando</p>
    if(error) return <p>Error :{error}</p>
  return (
   <>
        <ul style={{display:'flex', flexWrap:'wrap'}}>
            {data.map(character=>(
                <li style={{listStyle:'none'}}>
                    <img src={character.image} />
                </li>
            ))}
        </ul>
   </>
  )
}

export default CharacterList