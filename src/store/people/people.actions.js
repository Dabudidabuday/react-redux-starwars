import React from "react";
import { baseUrl, urls } from "../../constants";
import { getPeople } from "../../api";

export const peopleActionTypes = {
    GET_PEOPLE: "PEOPLE.GET_PEOPLE",
    SET_PEOPLE: "PEOPLE.SET_PEOPLE",
    SET_LOADER: 'PEOPlE.SET_LOADER',
    FILTER_PEOPLE: 'PEOPLE.FILTER_PEOPLE',
    SET_CHOSEN_HERO: 'PEOPLE.SET_CHOSEN_HERO',
    GET_HERO_SLUG: 'PEOPLE.GET_HERO_SLUG',
    SET_SEARCH_VALUE: 'PEOPLE.SET_SEARCH_VALUE',
    SET_CURRENT_PAGE: 'PEOPLE.SET_CURRENT_PAGE'
}

export const peopleActions = {
    getPeople: (params) => async (dispatch) => {
        dispatch(peopleActions.setLoader(true))

        try {
            const response = await getPeople(params);

            dispatch(peopleActions.setCurrentPage(response));
            dispatch(peopleActions.setPeople(response.results));
        } catch(e) {
            console.log(e.message);
        } finally {
            dispatch(peopleActions.setLoader(false))
        }
    },
    setPeople: (people) => ({type: peopleActionTypes.SET_PEOPLE, payload: people}),
    filterPeople: (name) => ({type: peopleActionTypes.FILTER_PEOPLE, payload: name}),
    setLoader: (loading) => ({type: peopleActionTypes.SET_LOADER, payload: loading}),
    setSearchValue: (name) => ({type: peopleActionTypes.SET_SEARCH_VALUE, payload: name}),
    setCurrentPage: (payload) => ({type: peopleActionTypes.SET_CURRENT_PAGE, payload})
}