import React, { useState } from 'react'

const HeaderC = () => {
  const [loggedIn, setLoggedIn]=useState(false)
  const data={
    titulo:'Bienvenidos',
    subtitulo:'JavaScript',
    fecha:'5/11/2024'
  }

  const handleLogin=()=> setLoggedIn(!loggedIn)

  // const buttonStyles={
  //   backgroundColor:'green'

  // }
  const Button=({onClick,text})=><button onClick={onClick}>{text}</button>
  
  const Bienvenida=()=><div><h1>Bienvenidos a React</h1></div>

  const Login=()=><div><p>Por favor logueate</p></div>
  return (
  <>
  <h1>Header</h1>
      {loggedIn ? <Bienvenida/>:<Login/>}
      <Button text={loggedIn ? 'Logout':'Login'} onClick={handleLogin} />
      { loggedIn ? 
      <p>Tu estas logueada</p>
      :
      <p>Por favor logueate para tener mas informacion</p>
      }
  </>
  )
}

export default HeaderC