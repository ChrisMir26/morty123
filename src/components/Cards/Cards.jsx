import React from "react"
import Card from '../Card/Card';
import style from "../Cards/Cards.module.css"

export default function Cards({character, onClose}) {


   
   return (
   
         <div className={style.container}>

            {character.map(({name, species, gender, image, id})=>{
               return (
                     <Card 
                        key={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image} 
                        onClose={onClose}
                        id={id}/>
               )
            })}
              
   

            
         </div>)
}
