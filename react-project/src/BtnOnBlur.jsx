import React, { useState } from 'react'

export const BtnOnBlur = () => {
    const [message,setMessage]=useState('')
    const handleBlur=()=>{
            setMessage('El input ha perdido el foco')
    }
  return (
    <>
        <h3>OnBlur</h3>
        <input 
            type="text"
            onBlur={handleBlur} />
            <p>{message}</p>
    </>
)
}
