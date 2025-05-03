import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt} from 'react-icons/bi'
import "./Navbar.css"

function Navbar() {
  return (
    <nav id='navbar'>
      <h2>
        <Link to="/"><BiCameraMovie />Gosalan Films</Link>
      </h2>
      <form>
        <input type="text" placeholder='Buscar Filme:' />
        <button type='submit'><BiSearchAlt /></button>
      </form>
    </nav>
  )
}

export default Navbar
