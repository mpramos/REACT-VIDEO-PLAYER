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
    </>
  )
}

export default NavBar