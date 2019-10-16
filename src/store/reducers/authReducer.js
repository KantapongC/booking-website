import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/authActions';

const INITIAL_STATE = {
	authError: null
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOGIN_ERROR:
			return {
				...state,
				authError: 'Login failed'
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				authError: null
			};
		case SIGNOUT_SUCCESS:
			return state;
		default:
			return state;
	}
};

export default authReducer;
