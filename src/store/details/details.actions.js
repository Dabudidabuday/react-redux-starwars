import { apiGetHero } from "../../api";

export const detailsActionTypes = {
    SET_HERO: "DETAILS.SET_HERO",
    SET_LOADER: "DETAILS.SET_LOADER"
}

export const detailsActions = {
    getHero: (name) => async (dispatch) => {

        dispatch(detailsActions.setLoader(true))

        try {
            const response = await apiGetHero(name);

            dispatch(detailsActions.setHero(response.results))
        } catch(e) {
            console.log(e.message)
        } finally {
            dispatch(detailsActions.setLoader(false))
        }
    },
    setHero: (hero) => ({type: detailsActionTypes.SET_HERO, payload: hero}),
    setLoader: (loading) => ({type: detailsActionTypes.SET_LOADER, payload: loading})
}