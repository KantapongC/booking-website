import {
  CREATE_SETTING_SERVICE_SUCCESS,
  CREATE_SETTING_SERVICE_ERROR,
  GET_SETTING_SERVICE_SUCCESS,
  GET_SETTING_SERVICE_ERROR,
  UPDATE_SETTING_SERVICE_SUCCESS,
  UPDATE_SETTING_SERVICE_ERROR,
  DELETE_SETTING_SERVICE_SUCCESS,
  DELETE_SETTING_SERVICE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  error: null
};

const serviceRulesReducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case CREATE_SETTING_SERVICE_SUCCESS:
      return {
        ...state
      };

    case CREATE_SETTING_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case GET_SETTING_SERVICE_SUCCESS:
      return {
        ...state,
        serviceRules: payload
      };

    case GET_SETTING_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case UPDATE_SETTING_SERVICE_SUCCESS:
      return {
        ...state
      };

    case UPDATE_SETTING_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    case DELETE_SETTING_SERVICE_SUCCESS:
      return {
        ...state
      };

    case DELETE_SETTING_SERVICE_ERROR:
      return {
        ...state,
        error
      };

    default:
      return state;
  }
};

export default serviceRulesReducer;
