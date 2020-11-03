import React from 'react';
import './index.css'
import icono from './icono.png'


const Nav = () => {


return(
    <div id="container">
  <nav className="navegate">
  <div id="icono">
    <img src={icono} alt="icono" width="70px"></img>
  </div>
    <ul>
        {/* colocar link a destinos*/}
      <li><strong><a href="http://www.google.com">About</a></strong></li>
      <li><strong><a href="https://github.com/JPLAMATTINA?tab=repositories">Contact</a></strong></li>
      <li><strong><a href="http://wwww.">Download</a></strong></li>
    </ul>
  </nav>
  </div>
  )
}


export default Nav;