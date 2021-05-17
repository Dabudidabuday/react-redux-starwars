import { peopleActionTypes } from "./people.actions";

const initialState = {
    people: [],
    loading: false,
    chosenHero: null,
    heroFromSlug: '',
    filteredHeroes: [],
    searchValue: ''
}

export const peopleReducers = (state=initialState, action) => {
    switch (action.type) {
        case peopleActionTypes.SET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }

        case peopleActionTypes.SET_LOADER:
            return {
                ...state,
                loading: action.payload
            }

        case peopleActionTypes.FILTER_PEOPLE:
            let value = action.payload.toLowerCase();

            if(!value) {
                return {
                    ...state,
                    filteredHeroes: state.people
                }
            }
            return {
                ...state,
                filteredHeroes: state.people.filter(item => (
                    item.name.toLowerCase().includes(value)
                ))
            }

        case peopleActionTypes.SET_CHOSEN_HERO:
            return {
                ...state,
                chosenHero: action.payload.reduce((acc, cur, i) => acc[i] = cur, {})
            }

        case peopleActionTypes.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }

        default:
            return state
    }
}