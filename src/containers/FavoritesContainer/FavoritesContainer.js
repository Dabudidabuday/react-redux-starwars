import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Favorites } from "../../pages";
import { paths } from '../../constants';
import { getFavoritesHeroes } from '../../localStorage';

export const FavoritesContainer = () => {
    const [ heroes, setHeroes ] = useState();
    const history = useHistory();

    useEffect(() => {
        const heroesList = JSON.parse(localStorage.getItem('favorites'));
        setHeroes(heroesList.heroes);
    }, [])

    const toHeroPage = (name) => {
        const link = name.replace(' ', '-').toLowerCase();
        history.push(`${paths.peoples}/${link}`);
    }

    const removeHero = (name) => {
        const lcHeroes = getFavoritesHeroes();

        lcHeroes.heroes = lcHeroes.heroes.filter(hero => (hero.name !== name));

        localStorage.setItem('favorites', JSON.stringify(lcHeroes))
        setHeroes(lcHeroes.heroes)
    }

    return (
        <Favorites
            toHeroPage={toHeroPage}
            heroes={heroes}
            removeHero={removeHero}
        />
    )
}