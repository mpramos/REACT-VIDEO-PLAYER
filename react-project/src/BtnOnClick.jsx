import React from 'react'

export const BtnOnClick = () => {
   let handleClick=()=>{
        alert('Evento handle Click')
   } 
    return (
    <>
        <h1>Evento OnClick</h1>
        <button onClick={handleClick}>onclick</button>
    </>
  )
}
