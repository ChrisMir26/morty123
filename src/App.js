import './App.css';
//import characters from './data.js';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/Search/SearchBar.jsx';
import Favorites from './components/Favorites/Favorites';
import Nav from "./components/Nav/Nav.jsx"
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
   
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const EMAIL = "christian.mir26@gmail.com"
   const PASSWORD = "123456"
   const navigate = useNavigate();


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      const url = `https://rickandmortyapi.com/api/character/${id}`

      fetch(url)
         .then(res => res.json())
         .then(data =>{
            if(data.name && !characters.find((char)=> char.id === data.id)){
               if(characters.length < 8 ){
               
               setCharacters([...characters, data])}
               else{
                  window.alert(`cantidad maxima de cards son 8, borra algun elemento para seguir`)
               }
            }else{
               window.alert(`id incorrecto o repetido`)
            }
         })
      
   }
   
   const randomChar  = () =>{
      const randomNumber = parseInt(Math.floor(Math.random() * 826))
      
      console.log(randomNumber)
      const url = `https://rickandmortyapi.com/api/character/${randomNumber}`
      fetch(url)
      .then(res => res.json())
      .then(data=>{
         if(data.name && !characters.find((char)=> char.id === data.id)){
            if(characters.length < 8 ){
            
            setCharacters([...characters, data])}
            else{
               window.alert(`cantidad maxima de cards son 8, borra algun elemento para seguir`)
            }
         }else{
            window.alert(`id incorrecto o repetido`)
         }
      })

      }
      
      const onClose = (id) => {
         const parsedId = parseInt(id);
         const filteredCharacters = characters.filter((item) => item.id !== parsedId);
            return setCharacters(filteredCharacters);
       }

   const clear = () =>{
      return setCharacters([])
   }
   
   const {pathname} = useLocation()



   return (
      <div className='App'>

        { pathname !== "/" && <Nav onSearch={onSearch} randomChar={randomChar} clear={clear} />}
         <Routes>   
            <Route path='/' element={<Form  login= {login}/>}/>
            <Route path='/home' element= {<Cards  character={characters} onClose= {onClose}/>}     />
             <Route path='/about' element={<About />}/>
             <Route path='/detail/:detailId' element={<Detail />}  />     
             <Route path='/favorites' element={<Favorites/>}/>

   </Routes>
      </div>
   );
}

export default App;



//import SearchBar from './components/Search/SearchBar.jsx';
//<SearchBar className="search" onSearch={(characterID) => window.alert(characterID)} />
{/*      <SearchBar className="search" onSearch={(characterID) => window.alert(characterID)} />*/}            


 {/*  <Routes>
            <Route path='/home' element={}/>
            <Route path='/about' element={<About />}/>
             <Route path='/detail/:detailId' element={<Detail />}/>
 
            
         </Routes> */} 