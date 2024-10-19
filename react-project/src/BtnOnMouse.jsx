import React, { useState } from 'react'

export const BtnOnMouse = () => {
    const [message,setMesagge]=useState('Pasa el mouse sobre el area')

    const handleMouseEnter=()=>{
        setMesagge('El mouse esta dentro del area')
    }
    const handleMouseLeave=()=>{
        setMesagge('El mouse ha salido del area')

    }
    return (
    <>
    <h3>On Mouse</h3>
    <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{border:'1px solid red',padding:'20px'}}
    ></div>
    <p>{message}</p>
    </>
  )
}
