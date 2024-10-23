import React, { useState } from 'react'

export const FormularioComplejo = () => {
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:''
    }) // formData={firstName:'',lastName:'',  email:''}
    const handleSubmit=(e)=>{
            e.preventDefault()
            console.log('datos del formulario ', formData);
            
    }
    const handleChange=(e)=>{
        let {name,value}=e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]:value // {firstName:'Lorenzo',lastName:'Ramirez',email:''}
        }))
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label> Nombre:</label>
            <input 
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                />
            <label> Apellido:</label>
            <input 
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                />
            <label> Email:</label>
            <input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
        </div>
        <button type='submit'>Enviar</button>
    </form>
    </>
  )
}
