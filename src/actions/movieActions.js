export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';

export const addMovie = (movie) => {
    console.log('from addMovie action', movie)
    return({type: ADD_MOVIE, payload: movie});
}

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload: id});
}