import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';


const App = () =>(
  
    <div id="contenedor">
      <BrowserRouter>
        <Nav />
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );

export default App;