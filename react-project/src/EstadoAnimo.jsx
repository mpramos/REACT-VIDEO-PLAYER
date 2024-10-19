import React, { useState } from 'react'

export const EstadoAnimo = () => {
    let emojis=['✨','😃','✔']
    let emojisCopia=emojis
    console.log(emojisCopia);
    emojisCopia.push('🎉')
    console.log(emojis); //['✨','😃','✔','🎉']
    let emojiCopia=emojis.map(emoji=> emojis+'✔')//['✨✔','😃✔','✔✔','🎉✔']

    let [estadoAnimo,setEstadoAnimo]=useState('feliz')

    let ponerseFeliz=()=> setEstadoAnimo(' feliz 😁')
    let ponerseTriste=()=> setEstadoAnimo(' triste 😁')
    let ponerseCansado=()=> setEstadoAnimo(' cansado 😁')


  return (
    <>
        <p>ESTADO DE ANIMO :{estadoAnimo}</p>
        <button onClick={ponerseFeliz}>Feliz</button>
        <button onClick={ponerseTriste}>Trise</button>
        <button onClick={ponerseCansado}>Cansado</button>
    </>
  )
}
