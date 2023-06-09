import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import { useEffect } from "react";



export default function Detail(){ 

        const {detailId} = useParams()

        const [character, setCharacter] = useState([])



        useEffect(() => {
            const url = `https://rickandmortyapi.com/api/character/${detailId}`
            
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                if(data.name){
                    setCharacter(data)
                }else{
                    window.alert('No hay personajes con ese ID')
                }
            })
            .catch(error => {
                // Aquí manejas el error
                if (error.message === '404') {
                  console.log('Error 404: Página no encontrada');
                  // Realiza alguna acción adicional o muestra un mensaje de error al usuario
                } else {
                  console.log('Error:', error.message);
                }
              });

          return () => {
            return character
          }
        }, [])
        

   

    return (
        <div className={style.detail}>
            {character.name ? (
                <>
                <div className={style.detailText}>
                <h1 className={style.characterH1}>{character.name}</h1>
                <h3 className={style.characterH3}>{character.status}</h3>
                <h3 className={style.characterH3}>{character.species}</h3>
                <h3 className={style.characterH3}>{character.gender}</h3>
                <h3 className={style.characterH3}>{character.origin?.name}</h3>
            </div>
            <div className={style.detailImgCnt}>

                    <img className={style.detailImg} src={character.image} alt="" srcset="" />
            </div>
            </>
            ) : (<>
                <h3>LOADING</h3>
            
            </>)}
            

        </div>
    )
}



