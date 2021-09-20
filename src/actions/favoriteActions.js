import { bindActionCreators } from "redux";

export const ADD_FAVORITES = 'ADD_FAVORITES';   
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const addFavorites = (movie) => {
    // console.log('from addFavorite action', movie)
    return ({type: ADD_FAVORITES, payload: movie})
}

export const toggleFavorites = () => {
    return ({type: TOGGLE_FAVORITES});
}

export const removeFavorite = (id) => {
    return ({type: REMOVE_FAVORITE, payload: id})
}