import React from 'react';

const Recipe = ({titel, kalorier, image, ingridienser}) =>{
    return(
        <div>
            <h1>{titel}</h1>
            <ol>
                {ingridienser.map( ingredients =>
                    <li>{ingredients.text}</li>
                    )}
            </ol>
            <p>{kalorier}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe;