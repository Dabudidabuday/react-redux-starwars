import { detailsActionTypes } from "./details.actions";

const initialState = {
    hero: {},
    loading: false
}

export const detailsReducer = (state=initialState, action) => {
    switch (action.type) {
        case detailsActionTypes.SET_HERO:
            return {
                ...state,
                hero: action.payload.reduce((acc, cur, i) => acc[i] = cur, {})
            }

        case detailsActionTypes.SET_LOADER:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}