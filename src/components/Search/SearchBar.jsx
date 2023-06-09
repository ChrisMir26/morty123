import style from "../Search/SearchBar.module.css";
import { useState } from 'react';

export default function SearchBar({onSearch, randomChar, clear}) {

  const [id, setId] = useState([])

  const handleChange = (event) =>{
    const target = event.target.value
      setId(target)
    }
     
 
  //  setId(event.target.value)
  

  return (
    <nav className={style.contenedor}>
      <div>
        <input type="search" onChange={handleChange} />

        <button onClick={()=>onSearch(id)}>
          Agregar
        </button>
        <button onClick= {randomChar}>
           Random
        </button>
        <button onClick={clear} >
           Clear
        </button>
      </div>
    </nav>
  );
}
