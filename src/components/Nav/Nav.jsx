import React from "react";
import style from "./Nav.module.css";
import SearchBar from "../Search/SearchBar";
import { Link } from "react-router-dom";
import About from "../About/About.jsx"
import { NavLink } from 'react-router-dom';


export default function Nav({ onSearch, randomChar, clear ,}) {
  
  return (

      <nav className={style.contenedor}>
        <div>
         <NavLink className={style.NavLink}to="/about"><h3>ABOUT</h3></NavLink>
         <NavLink className={style.NavLink}to="/home"><h3>HOME</h3></NavLink>
         <NavLink className={style.NavLink}to="/favorites"><h3>FAVORITES</h3></NavLink>
         
         </div>
        <div>
          <SearchBar onSearch={onSearch} randomChar={randomChar} clear={clear} />
 
        </div>
      </nav>
   
  );
}
