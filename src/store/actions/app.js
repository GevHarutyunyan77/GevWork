
export const SET_DATA_REQUEST = 'SET_DATA_REQUEST';
export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
export const SET_DATA_FAIL = 'SET_DATA_FAIL';
export const SET_TOP_MOVIES_REQUEST = 'SET_TOP_MOVIES_REQUEST';
export const SET_TOP_MOVIES_SUCCESS = 'SET_TOP_MOVIES_SUCCESS';
export const SET_TOP_MOVIES_FAIL = 'SET_TOP_MOVIES_FAIL';
export const SET_LIKED_MOVIES = 'SET_LIKED_MOVIES'
export const SET_MODALMOVIE_REQUEST = 'SET_MODALMOVIE_REQUEST';
export const SET_MODALMOVIE_SUCCESS = 'SET_MODALMOVIE_SUCCESS';
export const SET_MODALMOVIE_FAIL = 'SET_MODALMOVIE_FAIL';
export const SET_TO_BLACKLIST = 'SET_TO_BLACKLIST ';





export function setData(name) {

  return {
    type: SET_DATA_REQUEST,
    payload: name,
  };
}

export function getTopMovies() {
  return {
    type: SET_TOP_MOVIES_REQUEST,
    payload: {},
  };
}
export function setLikedMovies(movie) {
  return {
    type: SET_LIKED_MOVIES,
    payload: movie,
  };
}


export function setToBlackList(id) {
  return {
    type: SET_TO_BLACKLIST,
    payload: id,
  };
}


export function setModalMovie(id) {
  return {
    type: SET_MODALMOVIE_REQUEST,
    payload: id,
  };
}

