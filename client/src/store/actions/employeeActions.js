import axios from 'axios';
import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_ERROR } from './types';

export const createEmployee = employee => async dispatch => {
	try {
		dispatch({ type: CREATE_EMPLOYEE_SUCCESS, employee });
	} catch (error) {
		dispatch({ type: CREATE_EMPLOYEE_ERROR, error });
	}
};

export const getEmployee = () => async dispatch => {
	try {
		const res = await axios.get('/api/employees/');
		dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: GET_EMPLOYEE_ERROR, error });
	}
};
