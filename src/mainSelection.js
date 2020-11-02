import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'



//Home
const Climas = () => {
  const [paises, setPaises] = useState([]);
  const [search, SetSearch] = useState("");
   const GetPais = () => {
    fetch(
      "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
    )
    //revisar esto en el Curso de Damian
      .then((response) => response.json())
      .then((paises) => {
        setPaises(paises); 
      })
      .catch((err) => console.log(err.message));
  };

  const Buscando = (event) => {
    SetSearch(event.target.value);
  };

  useEffect(() => {
    GetPais();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cantidad de caracteres de lo que está escribiendo el usuario
  const p = search.length;

  return (
    <>
      <label>Seleccione País</label><br/>
      <input
        type="search"
        id=""
        country=""
        placeholder="Search..."
        onChange={Buscando}
      />
      {/*First of all ask if there is a search statement, 
      then if this is true, useing "slice" we search the same length 
      of the input value on the list of titles in the json*/}
      {search ? (
        <ul>
          {paises.filter((paises) =>paises.country.slice(0, p).toLowerCase() === search.toLowerCase())
            .map((paises, i) => (<Link to={"/clima/" + paises.id} key={i}><li>{paises.city}</li></Link>
            ))}
          </ul>) : (<ul>{paises.map((paises, i) => (<Link to={"/clima/" + paises.id} key={i}>
            <li> {paises.id} {paises.city}</li></Link>
          ))}
        </ul>
      )}
    </>
  );
};

const Ciudad = () => {
  const [clima, setClima] = useState([]);
  const params = useParams();
  const GetClima = () => {
    //*json estatico*
    fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json")
      .then((response) => response.json())
      .then((clima ) => {
        setClima(clima);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    GetClima();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  return (
    <div id="elegido">
      {/*clima.map((clima) => clima.id === params.id ? clima.monthlyAvg)}*/}
      {clima.map((clima) => 
      <h1 key={clima.id}>{clima.id === parseFloat(params.id) ?
        /*ingresamos al Array de monthlyAvg*/
        <div> <h2> {clima.country} - {clima.city}</h2>
        
      {clima.monthlyAvg.map((temperatura, i) => <ul key={i}>

      <li>mes: {meses[i]}</li> 
        

         <li>High: {temperatura.high}</li>
         <li>Low: {temperatura.low}</li>
      </ul>)} </div>
             
        : null }</h1> )}

      <Link to="/" id="bottonHome">
        <input type="button" value="Home" />
      </Link>
    </div>
  );
};

const Selection = () => {
  return (
    <Route>
      <h1>
        <em>Searching clima</em>
      </h1>
      <Switch>
        <Route exact path="/">
          <Climas />
        </Route>
        <Route exact path="/clima/:id">
          <Ciudad />
        </Route>
      </Switch>
    </Route>
  );
};
export default Selection;