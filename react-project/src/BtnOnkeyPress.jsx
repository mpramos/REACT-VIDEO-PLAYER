import React, { useState } from 'react'

export const BtnOnkeyPress = () => {
    let [key,setKey]=useState('')
    const handleKeyPress=(e)=>{
            setKey(e.key)
    }
  return (
    <>
    <h3>Btn onKeyDown </h3>
    <input
     type="text"
     onKeyDown={handleKeyPress}
     />
     <p>Has presionado la tecla : {key}</p>
    </>
  )
}
