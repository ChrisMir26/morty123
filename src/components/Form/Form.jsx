import React from "react";
import style from "./Form.module.css"
import  Validation  from "./validation";
import { useState } from "react";

 const Form = (props) => {


    const [userData, setUserData] = useState({
        email:"",
        password:""
    })
    const [errores, setErrores] = useState({})

    const handleChange = (e) =>{
      const property = e.target.name
      const value = e.target.value

      setUserData({...userData, [property] : value })
      Validation(property,value, errores, setErrores)

    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      props.login(userData)

    }


  return (
    <form action="" onSubmit={handleSubmit} >
      <div className={style.formImgCtn}>
      </div>
      <div className={style.formText}>
        <div className={style.inputTextUser}>
          <label htmlFor="" name="email">
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
          </label>
          <br />
          <span className={style.Error}>{errores.email}</span>
        </div>
        <div className={style.inputTextPassword}>
          <label htmlFor="" name="password">
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            <br />
            <span className={style.Error}>{errores.password}</span>
          </label>
        </div>
        <button type="submit" className={style.submit}>Enviar</button>
      </div>
    </form>
  );
};

export default Form