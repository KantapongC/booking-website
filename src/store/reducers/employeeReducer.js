import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR } from '../actions/employeeActions';

const INITIAL_STATE = {};

const employeeReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CREATE_EMPLOYEE_SUCCESS:
			console.log('create employee success');
			return state;
		case CREATE_EMPLOYEE_ERROR:
			console.log('create employee error');
			return state;
		default:
			return state;
	}
};

export default employeeReducer;
