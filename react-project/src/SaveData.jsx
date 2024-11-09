import React, { useState } from 'react'
import { auth ,db} from './firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { Button, TextField } from '@mui/material'


export const SaveData = () => {
    const [input,setInput]=useState("")

    const handleSave= async () => {
        if (auth.currentUser) {
            try {
                await addDoc(collection(db,"userData"),{
                    uid:auth.currentUser.uid,
                    content:input
                })
                console.log("Datos guardados")
                setInput("")
            } catch (error) {
                console.error("Error al guardar los datos ", error);
                
            }
        } else {
            console.log("Usuario no estáautenticado");
            
        }
    }

    return (
        <div style={{textAlign:'center', marginTop:'20px'}}>
            <TextField
                label="Escribe algo"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <Button
                color='primary'
                onClick={handleSave}
                style={{marginLeft:"10px"}}
            >Guardar</Button>
        </div>
    )
}
