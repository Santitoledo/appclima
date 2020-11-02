import React from 'react';
import Titular from './Titular';
import Parrafo from './Parrafo';
import Figura from './Figura';
import useFetch from "./useFetch";

const Paises = () => {
    
    const paises = useFetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json");
    
    return (  
        <select name="selectPais">
          {paises.map((pais) => <option key={pais.id} value={pais.id}>{pais.country}</option>)}
        </select>      
    )
}

const Ciudad = (props) => {
    const paises = useFetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json");
    return(
        <ul>
            {paises.filter((pais) => pais.id === props.id).map((pais) => <li key={pais.id}>{pais.city}</li>)}
        </ul>
    )
}

function Home(){
    return(
        <div>
        <div>
            <Titular titular="Proyecto App Clima."/>
            <Parrafo contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique placerat ex quis pellentesque. In malesuada, velit eu luctus egestas, risus purus sodales massa, vitae placerat dolor lectus ut sem. Donec in volutpat sem. Aliquam nulla urna, facilisis vel urna nec, condimentum cursus nulla. Aenean lacinia tempor turpis ut varius. Fusce non leo non nulla elementum faucibus. Vestibulum aliquam"/>
            <Figura url1="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alter="Hero image" />
            
        </div>
        <div>
            <form>
                <label>Seleccione pais:</label>
                <Paises />
                <label>Seleccione ciudad:</label>
                <Ciudad />
            </form>
        </div>
        </div>
    )

}
export default Home;
