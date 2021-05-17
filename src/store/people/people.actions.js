import React from "react";
import { useSelector } from 'react-redux';
import { baseUrl, urls } from "../../constants";
// import { getHero } from '../../api';

export const peopleActionTypes = {
    GET_PEOPLE: "PEOPLE.GET_PEOPLE",
    SET_PEOPLE: "PEOPLE.SET_PEOPLE",
    SET_LOADER: 'PEOPlE.SET_LOADER',
    FILTER_PEOPLE: 'PEOPLE.FILTER_PEOPLE',
    SET_CHOSEN_HERO: 'PEOPLE.SET_CHOSEN_HERO',
    GET_HERO_SLUG: 'PEOPLE.GET_HERO_SLUG',
    SET_SEARCH_VALUE: 'PEOPLE.SET_SEARCH_VALUE',
}

export const peopleActions = {
    getPeople: () => async (dispatch) => {
        dispatch(peopleActions.setLoader(true))
        try {
            const response = await fetch(baseUrl + urls.people);
            const people = await response.json();

            dispatch(peopleActions.setPeople(people.results))
        } catch(e) {
            console.log(e.message);
        } finally {
            dispatch(peopleActions.setLoader(false))
        }
    },
    setPeople: (people) => ({type: peopleActionTypes.SET_PEOPLE, payload: people}),
    filterPeople: (name) => ({type: peopleActionTypes.FILTER_PEOPLE, payload: name}),
    setLoader: (loading) => ({type: peopleActionTypes.SET_LOADER, payload: loading}),
    // getChosenHero: (heroName) => async (dispatch) => {
    //     dispatch(peopleActions.setLoader(true));
    //
    //     try {
    //         const response = await getHero(heroName)
    //         dispatch(peopleActions.setChosenHero(response.results))
    //     } catch (e) {
    //         console.log(e.message)
    //     } finally {
    //         dispatch(peopleActions.setLoader(false))
    //     }
    // },
    // setChosenHero: (hero) => ({type: peopleActionTypes.SET_CHOSEN_HERO, payload: hero}),

    setSearchValue: (name) => ({type: peopleActionTypes.SET_SEARCH_VALUE, payload: name})
}