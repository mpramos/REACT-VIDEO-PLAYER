import React, { useState } from 'react'
import { useEffect } from 'react'

export const FormularioMultipleComplejo = () => {
    const [formData,setFormData]=useState({
        genero:'',
        skills:{
            html:false,
            css:false,
            javascript:false
        }
    })
    const handleChange=(e)=>{
        const {name,type,checked}=e.target
        if(type==='checkbox'){
            setFormData((prevData)=>({
                ...prevData,
                skills:{...prevData.skills,[name]:checked}
                
            }))
            console.log('Estado actualizado 1 ', formData)
        }else{
            setFormData((prevData)=>({
                ...prevData,
                genero:name
                }))
            }
            console.log('Estado actualizado 2', formData)
            console.log('Estado actualizado 2', checked)
        }

        useEffect(()=>{console.log('Estado Actualizado ', formData)},[formData])
        return (
            <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label> Nombre: </label>
            <input
                type='text'
                onChange={e=>setFormData({...formData, firstName:e.target.value})}
                />
            <br />
            <label> Apellido: </label>
            <input
                type='text'
                onChange={e=>setFormData({...formData, lastName:e.target.value})}
                />
            <br />
            <label> Email: </label>
            <input
                type='email'
                onChange={e=>setFormData({...formData, email:e.target.value})}
            />
            <br />
            <label >
            <input
                name='Femenino'
                type='radio'
                checked={formData.genero==='Femenino'}
                onChange={handleChange}
                />
                Femenino
            </label>
            <br />
            <label >
            <input
                name='Masculino'
                type='radio'
                checked={formData.genero==='Masculino'}
                onChange={handleChange}
                />
                Masculino
            </label>
            <br />
            <h3>Habilidades</h3>
            <label>
                <input 
                    type="checkbox"
                    name='html'
                    checked={formData.skills.html}
                    onChange={handleChange}   
                    />
                    HTML
            </label>
            <label>
                <input 
                    type="checkbox"
                    name='css'
                    checked={formData.skills.css}
                    onChange={handleChange}   
                    />
                    css
            </label>
            <label>
                <input 
                    type="checkbox"
                    name='javascript'
                    checked={formData.skills.javascript}
                    onChange={handleChange}   
                    />
                  javascript
            </label>
        </form>
        <p>{formData.genero}</p>
        <p>{formData.skills.javascript ? 'Javascript está marcado':'desmarcado Js'}</p>
        <p>{formData.skills.css ? 'css está marcado':'desmarcado css'}</p>
        <p>{formData.skills.html ? 'html está marcado':'desmarcado html'}</p>
        </>
  )
}