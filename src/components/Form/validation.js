const Validation = (property, value, errores, setErrores)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex = /[0-9]/;

    if(property === 'email') {
        if(!value) setErrores({...errores, email:`El correo electrónico no puede estar vacío`});
        else if(value.length > 35) setErrores({...errores, email:`El nombre de usuario no puede tener más de 35 caracteres.`});
        else if(!emailRegex.test(value)) setErrores({...errores, email: `Correo electrónico inválido`});
        else setErrores({ ...errores, email: "" });
    }
    
    if(property === 'password') {
        if(value.length < 6 || value.length > 10) setErrores({...errores, password: `La contraseña tiene que tener una longitud entre 6 y 10 caracteres.`});
        else if(!regex.test(value)) setErrores({...errores, password:`Debe contener al menos un número`});
        else setErrores({ ...errores, password: "" });
    }
}



export default Validation