import React, { useState } from 'react'

function FormularioSimple() {
    let [nombre,setNombre]=useState('')
    let [email,setEmail]=useState('')
    const manejarEnvio=(e)=>{
                e.preventDefault()
                alert(`Nombre: ${nombre} Email ${email}`)
    }
  return (
    <>
        <form onSubmit={manejarEnvio}>
            <div>
                <label >Nombre: </label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)} />
                <label >Email: </label>
                <input 
                    type="email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} />
                
            </div>
            <button type='submit'>Enviar</button>

        </form>
    </>
  )
}

export default FormularioSimple