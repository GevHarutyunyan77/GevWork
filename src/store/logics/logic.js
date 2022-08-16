import {createLogic} from 'redux-logic';
import {
  SET_DATA_FAIL,
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS, SET_TOP_MOVIES_FAIL,
  SET_TOP_MOVIES_REQUEST, SET_TOP_MOVIES_SUCCESS,
  SET_MODALMOVIE_REQUEST, SET_MODALMOVIE_SUCCESS, SET_MODALMOVIE_FAIL,
} from "../actions/app";
import axios from 'axios';






export const getDataLogic = createLogic({

  type: SET_DATA_REQUEST, //

  // only apply this logic to this type
  // cancelType: SET_DATA_FAIL, // cancel on this type
  latest: true, // only take latest
  process({state, action}, dispatch, done) {


    axios
      .get(`https://imdb-api.com/API/Search/k_6havk50n/${action.payload}`)
      .then(resp => dispatch({type: SET_DATA_SUCCESS, payload: resp.data.results}))
      .catch(err => {
        // log since could be render err
        dispatch({type: SET_DATA_FAIL, payload: err, error: true});
      })
      .then(() => done());
  },
});


export const getTopMovies = createLogic({

  type: SET_TOP_MOVIES_REQUEST, //

  // only apply this logic to this type
  // cancelType: SET_DATA_FAIL, // cancel on this type
  latest: true, // only take latest
  process({state, action}, dispatch, done) {


    axios
      .get('https://imdb-api.com/API/Top250Movies/k_6havk50n')
      .then(resp => dispatch({type: SET_TOP_MOVIES_SUCCESS, payload: resp.data.items}))
      .catch(err => {
        // log since could be render err
        dispatch({type: SET_TOP_MOVIES_FAIL, payload: err, error: true});
      })
      .then(() => done());
  },
});



export const getModalMovie = createLogic({

  type: SET_MODALMOVIE_REQUEST, //

  // only apply this logic to this type
  // cancelType: SET_DATA_FAIL, // cancel on this type
  latest: true, // only take latest
  process({state, action}, dispatch, done) {


    axios
      .get(`https://imdb-api.com/API/Title/k_6havk50n/${action.payload}`)
      .then(resp => dispatch({type: SET_MODALMOVIE_SUCCESS, payload: resp.data}))
      .catch(err => {
        // log since could be render err
        dispatch({type: SET_MODALMOVIE_FAIL, payload: err, error: true});
      })
      .then(() => done());
  },
});

