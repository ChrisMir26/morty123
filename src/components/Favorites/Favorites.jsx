import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card.jsx"


const Favorites = () =>{


    const myFavorites = useSelector((state)=> state.myFavorites)
  

    return(
        <div>
            {
                myFavorites.map((char)=>{
                    <Card
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    species={char.species}
                    gender={char.gender}
                    image={char.image}
                   
                  />
                })
            }



        </div>
    )    




}




export default Favorites