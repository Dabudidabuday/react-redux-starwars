import React, { useEffect } from "react";
import { slugToName } from '../../utils';
import { useDispatch, useSelector } from "react-redux";
import { HeroDetails } from "../../pages";
import { detailsActions } from "../../store/details";
import { useParams } from 'react-router-dom';

export const HeroDetailsContainer = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { hero, loading } = useSelector(state => state.details);
    const heroName = slugToName(slug);

    useEffect(() => {

        dispatch(detailsActions.getHero(heroName));
    }, [] );
    
    const addToFavorites = () => {
        if(localStorage.getItem('favorites') === null) {
            let favorites = {
                heroes: []
            };
            favorites.heroes.push(hero)

            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            favorites.heroes.push(hero);

            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    return (
        <HeroDetails
            hero={hero}
            loading={loading}
            addHero={addToFavorites}
        />
    )
}