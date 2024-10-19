import React, { useState } from 'react'

const BtnOnSubmit = () => {
    const [inputValue,setInputValue]=useState('')
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log('Formulario enviado con el valor ' + inputValue);
        
    }
  return (
    <>
    <form onSubmit={handleOnSubmit}>
        <h3>OnSubmit</h3>
        <input 
            type="text"
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}/>
        <button type='submit'>enviar</button>
    </form>
    </>    
)
}

export default BtnOnSubmit