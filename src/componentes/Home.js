import React from 'react';
import Titular from './Titular';
import Parrafo from './Parrafo';
import Figura from './Figura';
import Select from './Select';



function Home(){
    return(
        <div>
        <div>
            <Titular titular="Proyecto App Clima."/>
            <Parrafo contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique placerat ex quis pellentesque. In malesuada, velit eu luctus egestas, risus purus sodales massa, vitae placerat dolor lectus ut sem. Donec in volutpat sem. Aliquam nulla urna, facilisis vel urna nec, condimentum cursus nulla. Aenean lacinia tempor turpis ut varius. Fusce non leo non nulla elementum faucibus. Vestibulum aliquam"/>
            <Figura url1="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alter="Hero image" />
            
        </div>
        <div>
            <Select />
        </div>
        </div>
    )

}
export default Home;