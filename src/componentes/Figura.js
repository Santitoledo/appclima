import React from 'react';


const Figura = (props) => (
    <>
    <figure id="figura">
        <img src={props.url1} alt={props.alter}/>
        
        <figcaption>{props.caption}</figcaption>
    </figure>
    </>
  );
  export default Figura;