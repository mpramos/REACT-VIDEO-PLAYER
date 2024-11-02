import React, { useRef } from 'react'

function FormSubmit() {
    const inputRef=useRef(null)
    const handdleSubmit=()=>{
        alert('Valor ingresado correctamente ' +inputRef.current.value)
        inputRef.current.value=''
    }
  return (
    <div>
        <input type="text" placeholder='Escriba aqui' ref={inputRef} />
        <button onClick={handdleSubmit}>Enviar</button>
        
    </div>
  )
}

export default FormSubmit