import React from 'react'

function MapeoArrays() {
    
    const skills=[
        ['HTML',10],
        ['CSS',8],
        ['JAVASCRIPT',7],
        ['REACT',5]
    ]

    const Skill=({skill:[tech,level]})=> (
        <>
        <h3>{tech}</h3>
        <p>{level}</p>
        </>
    )

    const Skills=({skills})=>{
        const listSkills= skills.map((skill)=><Skill key={skill[0]} skill={skill}/>)
        return <ul>{listSkills}</ul>
    }
    return (
          <>
          <h1>Mapeo de arreglos</h1>
          <Skills skills={skills}/>
          </>  
  )
}

export default MapeoArrays