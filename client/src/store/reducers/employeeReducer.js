import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_ERROR } from '../actions/types';

const INITIAL_STATE = {
	error: null
};

const employeeReducer = (state = INITIAL_STATE, { type, payload, error }) => {
	switch (type) {
		case CREATE_EMPLOYEE_SUCCESS:
			return state;
		case CREATE_EMPLOYEE_ERROR:
			return state;
		case GET_EMPLOYEE_SUCCESS:
			return { ...state, employees: payload };
		case GET_EMPLOYEE_ERROR:
			return { ...state, error };
		default:
			return state;
	}
};

export default employeeReducer;
