import React from 'react';
import './index.css'



const Footer = () => {


return(
    <div id="container">
    <div id="download">
        <h2>Download</h2>
    <input type="button" value="Download"></input>
    </div>
  <footer>
    <ul>
        {/* colocar link a destinos*/}
      <li><strong><a href="http://www.google.com">About</a></strong></li>
      <li><strong><a href="https://github.com/JPLAMATTINA?tab=repositories">Contact</a></strong></li>
      <li><strong><a href="http://wwww.">Download</a></strong></li>
    </ul>
    <p className="ubicacion">Buenos Aires, CABA - Argentina</p>
  </footer>
  </div>
  )
}


export default Footer;