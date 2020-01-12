import {
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  error: null,
  isLoading: false
};

const employeeReducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        error
      };

    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: payload
      };

    case GET_EMPLOYEE_ERROR:
      return {
        ...state,
        error
      };

    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        error
      };

    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: !state.isLoading
      };

    case DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        error
      };

    default:
      return state;
  }
};

export default employeeReducer;
