import React from 'react'

export const ArraysSimple = () => {
    const Numbers =({numbers})=>{
       const listNumbers=numbers.map((number)=><li key={number}>{number}</li>) 
        return listNumbers
    }
    const numbers=[1,2,3,4,5,6]
    return (
        <div>
            <h1>Lista de Numeros</h1>
            <ul>
            <Numbers numbers={numbers}/>
            </ul>
        </div>
  )
}
