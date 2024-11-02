import React, { useRef } from 'react'

function Ref1() {

    const ref=useRef()
    const onClick=()=>{
        let value=ref.current.value 
        alert(value)
    }
  return (
    <>
        <h1>Data...</h1>
        <input type="text" ref={ref}/>
        <br/>
        <button onClick={onClick}> Get Input Data</button> 
    </>
)
}

export default Ref1