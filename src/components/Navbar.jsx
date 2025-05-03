import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" ><BiCameraMovie/>Meu site de Filmes</Link>
      <form>
        <input type="text" placeholder='Buscar Filme:'/>
        <button type='submit'><BiSearchAlt/></button>
      </form>
    </nav>
  )
}

export default Navbar
