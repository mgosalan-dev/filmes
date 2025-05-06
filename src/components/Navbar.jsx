import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
    console.log(search);
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Gosalan Films
        </Link>
      </h2>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="Buscar Filme:"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
      <h2>
        <Link id="usuario" to="/login">
          <FaUserAstronaut />
        </Link>
      </h2>
    </nav>
  );
}

export default Navbar;
