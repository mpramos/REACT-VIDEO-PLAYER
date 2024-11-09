import React, { useState } from 'react'
import { useEffect } from 'react'
import { auth, db } from './firebaseConfig'
import { collection, getDocs, query , where} from 'firebase/firestore'
import { Typography } from '@mui/material'

export const ShowData = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
            const fetchData=async () => {
                if (auth.currentUser) {
                    const q= query(collection(db,"userData"),where("uid","==", auth.currentUser.uid))
                    const querySnapshot=await getDocs(q)
                    const dataList=querySnapshot.docs.map(doc=>doc.data())
                    setData(dataList)
                }
            }
         fetchData()       
    },[auth.currentUser])


  return (
    <div style={{textAlign:'center', marginTop:'20px'}}>
        <Typography>Tus datos guardados</Typography>
        {
            data.map((item,index)=>{
                return (
                    <>
                    <Typography key={index}>{item.content}</Typography>
                    {console.log(item.content)}
                    </>
                )
            })
        }

    </div>
)
}
