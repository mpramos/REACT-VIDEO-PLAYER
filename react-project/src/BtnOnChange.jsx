import React, { useState } from 'react'

export const BtnOnChange = () => {
    let [inputValue,setInputValue]=useState('')
    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    return (
    <>
        <form>
            <h3>Evento onChange</h3>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}/>
                <p>El valor ingresado es {inputValue}</p>
        </form>
    </>
  )
}
