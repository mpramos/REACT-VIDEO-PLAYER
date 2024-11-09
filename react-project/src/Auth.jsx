import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from './firebaseConfig'
import {Typography,Button} from '@mui/material'
export const Auth = () => {
    const [user,setUser]= useState(null)

    const handleLogin=async () => {
        try {
            await signInWithPopup(auth,provider)
        } catch (error) {
            console.error("Error de la autenticacio ", error)    
        }
    }
    const handleLogout=async () => {
        await signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return unsubscribe
    },[])

return (
        <div style={{textAlign:"center", marginTop:"50px"}}>
            {user ?(
                <>
                <Typography>Bienvenido, {user.displayName}</Typography>
                 <Button onClick={handleLogout}>Cerrar sesion</Button>                       
                </>

            ):(
                <Button onClick={handleLogin}>Iniciar sesion en Google</Button>

            )}


        </div>

)

}
