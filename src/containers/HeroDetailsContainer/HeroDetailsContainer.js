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
    console.log(heroName)
    useEffect(() => {

        dispatch(detailsActions.getHero(heroName));
    }, [] )

    return (
        <HeroDetails
            hero={hero}
            loading={loading}
        />
    )
}