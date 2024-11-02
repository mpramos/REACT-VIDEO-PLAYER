import React, { useEffect, useState } from 'react'

function useRickAndMorty(url) {
 const [data, setData]=useState([])
 const [loading, setLoading]=useState(true)
 const [error, setError]=useState(null)
 
 
 useEffect(()=>{
    const fetchData=async ()=>{
        try {
            const respuesta= await fetch(url)
            if(!respuesta.ok){
                throw new Error('Error en la respuesta del servidor')
            }
            const result = await respuesta.json()
            setData(result.results)
        } catch (error) {
                setError(error.message)                
        } finally{
            setLoading(false)
        }
    }
    fetchData()
 },[url])
 return {data, loading,error}
}

export default useRickAndMorty