import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR } from '../actions/employeeActions';

const INITIAL_STATE = {};

const employeeReducer = (state = INITIAL_STATE, { type, employee, error }) => {
	switch (type) {
		case CREATE_EMPLOYEE_SUCCESS:
			return state;
		case CREATE_EMPLOYEE_ERROR:
			return state;
		default:
			return state;
	}
};

export default employeeReducer;
