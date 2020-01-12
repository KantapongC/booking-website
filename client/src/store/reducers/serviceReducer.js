import {
  CREATE_SERVICE_LOADING,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_ERROR,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_ERROR,
  UPDATE_SERVICE_LOADING,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_ERROR,
  DELETE_SERVICE_LOADING,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  error: null,
  isLoading: false
};

const serviceReducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case CREATE_SERVICE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case CREATE_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        services: payload
      };

    case GET_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case UPDATE_SERVICE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case UPDATE_SERVICE_SUCCESS:
      return state;

    case UPDATE_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case DELETE_SERVICE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case DELETE_SERVICE_SUCCESS:
      return state;

    case DELETE_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    default:
      return state;
  }
};

export default serviceReducer;
