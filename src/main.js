import React from 'react';
import './index.css'
import Fondo from "./Fondo.jpg"


const Main = () => {
    

return(
//conviene usar className="container" para todos los div de contenedores?? 
    <div id="container">
    <h1 id="titulo">Proyect App Clima</h1>
    <div id="download">
        <img src={Fondo} alt="imagen" width="60%"></img>
    </div>
  </div>
  )
}


export default Main;