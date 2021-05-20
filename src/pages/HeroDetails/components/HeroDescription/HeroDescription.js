import './style.scss';
import React from "react";

export const HeroDescription = ({hero={}}) =>  {

    return (
       <div className="hero__description">
           <h1 className="h1 hero__title">{hero.name}</h1>

           <div className="short-description">
               <p>Height: {hero.height}</p>
               <p>Mass: {hero.mass}</p>
               <p>Hair color: {hero.hair_color}</p>
               <p>Eye color: {hero.eye_color}</p>
               <p>Birth year: {hero.birth_year}</p>
               <p>Gender: {hero.gender}</p>
           </div>
       </div>
    )
}