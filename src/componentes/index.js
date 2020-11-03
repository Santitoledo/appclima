import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './formulario.js';
import Footer from './footer.js'
import Nav from './Nav.js'
import Main from './main.js'
import Selection from './mainSelection'


ReactDOM.render((
  <BrowserRouter>
    <Nav />
    <Main />
    <Selection />
    <App />
    <Footer />
  </BrowserRouter>
), document.getElementById('root'));
