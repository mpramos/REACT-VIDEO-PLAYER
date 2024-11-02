import React, { useState } from 'react'

function ToggleButton() {
    const [isActive, setIsActive]= useState(false)
    const handleToggle=()=>{
        setIsActive(!isActive)
    }
  return (
    <>
    <button 
    onClick={handleToggle} 
    style={{background: isActive?'green':'red'}}>{isActive? 'Activo':'Inactivo'}</button>
    </>
  )
}

export default ToggleButton