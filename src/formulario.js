import React, {useRef} from 'react';
import './index.css'


const Formulario =() => {

  const textInput = useRef();
  const focusTextInput = () => {textInput.current.focus()
  }

  return(
    <div id="container">
      {/*Revisar el tema de los tildes*/}
      {/*<div className="logo"><img src=""alt="imagenLogo"></img></div>*/}
      <div>
        <h2 className="title">About</h2>
        <p className="text">Next time i will put some text here</p>
      </div>  
      {/*<div className="logo"><img src=""alt="imagenLogo"></img></div>*/}
        <h2 className="title">Contact Us</h2>
        <div id="coments">
        <textarea placeholder="Message"></textarea>
        </div>
      <div id="formulario">
          <form>
            <div id="boxInputs">
              <input className ="inputs" type="email" placeholder="Email Adress" ref={textInput} />
              <input className ="inputs" type="text" placeholder="Full Name" ref={textInput} />
              <button className ="inputs" onClick={focusTextInput} type="button">Envíar</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Formulario;