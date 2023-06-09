import React from "react";
import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFav, addFav } from "../redux/action";
import { useState } from "react";
import { useEffect } from "react";

function Card({
  name,
  species,
  gender,
  image,
  id,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(name, species, gender, image, id, onClose);
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={style.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <div className={style.cardImg}>
        <img src={image} height="250px" />
        <button className={style.btn} onClick={() => onClose(id)}>
          X
        </button>
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
      </div>
      <div className={style.cardText}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char)=>{
      dispatch(addFav(char));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) =>{

   return{myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
