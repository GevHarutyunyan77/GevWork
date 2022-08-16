import {
  SET_DATA_FAIL,
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS, SET_MODALMOVIE_REQUEST, SET_MODALMOVIE_SUCCESS,
  SET_LIKED_MOVIES,
  SET_TOP_MOVIES_REQUEST,
  SET_TOP_MOVIES_SUCCESS, SET_TO_BLACKLIST,
} from "../actions/app";




const initialState = {
    data: [],
  status:'',

  modalMovie:{image:''},
  liked: [],
  blackList:[]

}





export default function(state = initialState, action) {
  switch (action.type) {

    case SET_DATA_REQUEST: {
      return {
        ...state,
        status: "pending",
      };
    }
    case SET_TOP_MOVIES_REQUEST: {
      return {
        ...state,
        status: "pending",
      };
    }

    case SET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };
    }

    case SET_TOP_MOVIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };
    }

    case SET_LIKED_MOVIES: {
        return {
          ...state,
          liked: action.payload
        }
      }

      case SET_TO_BLACKLIST: {
        return {
          ...state,
          blackList: action.payload
        }
      }





    case SET_MODALMOVIE_REQUEST: {

      return {
        ...state,
        status: "pending",
      };
    }

    case SET_MODALMOVIE_SUCCESS: {

      return {
        ...state,
        modalMovie:action.payload,
        status: "ok",
      };
    }








    case SET_DATA_FAIL: {
      return {
        ...state,

        status: "fail",
      };
    }
    default: {
      return state

    }
  }
}
import React, { useEffect } from "react";
import { act } from "react-test-renderer";

