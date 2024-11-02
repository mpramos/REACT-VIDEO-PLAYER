import React, { forwardRef, useRef } from 'react'

function MyInputRef() {
    const inputRef=useRef()
    const MyInput=forwardRef((props,ref)=>{
        return <input {...props} ref={ref}/>
    })
    const handleClick=()=>{
            inputRef.current.focus()
    }
  
    return (
    <div>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>enfocar</button>
    </div>
  )
}

export default MyInputRef