import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
       <Link to="/"> Home</Link>
       <br/>
       <Link to="/about"> About</Link>
       <br/>
       <Link to="/personajes"> Rick and Morty</Link>
       <br/>
       <Link to="/personajesaxios"> Rick and Morty con axios</Link>
       <br/>
       <Link to="/ref1"> ref input</Link>
       <br/>
       <Link to="/useState1"> use state button</Link>
       <br/>
       <Link to="/formsubmit"> form submit</Link>
       <br/>
       <Link to="/forward"> forward</Link>
       <br/>
       <Link to="/useHook"> useHook</Link>

    </>
  )
}

export default NavBar