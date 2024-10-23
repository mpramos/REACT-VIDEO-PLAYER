import React, { useState } from 'react'

export const FormularioMultiple = () => {

    const [data,setData]= useState({
            genero:'',
            firstName:'',
            lastName:'',
            email:''
    })

    const [isChecked,setIsChecked]=useState(false)

  return (
    <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label >Nombre: </label>
            <input 
            type="text"
            onChange={(e)=>setData({...data,firstName:e.target.value})}    
            />
            <label >Apellido: </label>
            <input 
            type="text"
            onChange={(e)=>setData({...data,lastName:e.target.value})}    
            />
            <label >Email: </label>
            <input 
            type="email"
            onChange={(e)=>setData({...data,email:e.target.value})}    
            />
            <label >
<br />
            <input
                type='checkbox'
                checked={isChecked}
                onChange={e=>setIsChecked(()=>{
                    e.target.checked
                    console.log(e.target.checked);
                })}
                />
                Acetas los terminos y condiciones?
            </label>
            <br />
            <label >
                <input
                    name='Masculino'
                    type='radio'
                    checked={data.genero==='Masculino'} //true
                    onChange={(dato)=>setData({...dato,genero:'Masculino'})}
                />
                Masculino
            </label>
            <label >
                <input
                    name='Femenino'
                    type='radio'
                    checked={data.genero==='Femenino'} //true
                    onChange={(dato)=>setData({...dato,genero:'Femenino'})}
                />
                Femenino
            </label>
            <button type='sumbit'>enviar</button>
        </form>
            <br />
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.email}</p>
        <p>{isChecked}</p>
        <p>{data.genero}</p>
    </>
  )
}
