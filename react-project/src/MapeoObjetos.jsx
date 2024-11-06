import React from 'react'

function MapeoObjetos() {
    const paises=[
        {nombre:'Argentina', ciudad:'Buenos Aires'},
        {nombre:'Peru', ciudad:'Lima'},
        {nombre:'Colombia', ciudad:'Bogota'},
        {nombre:'Bolivia', ciudad:'La Paz'}
    ]
const Pais=({pais:{nombre,ciudad}})=>{
            return (
                <>
                   <h3>{nombre}</h3>
                   <p>{ciudad}</p> 
                </>
            )
}

const Paises =({paises})=>{
        const listPaises= paises.map((pais)=><Pais key={pais.nombre} pais={pais}/>)
           return listPaises 
    }

  return (
    <>
        <h1>Mapeo de Objetos</h1>
        <Paises paises={paises}/>
    </>
)
}

export default MapeoObjetos