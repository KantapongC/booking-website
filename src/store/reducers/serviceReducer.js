import { CREATE_SERVICE_SUCCESS, CREATE_SERVICE_ERROR, UPDATE_SERVICE_SUCCESS, UPDATE_SERVICE_ERROR, DELETE_SERVICE_SUCCESS, DELETE_SERVICE_ERROR } from '../actions/serviceActions';

const INITIAL_STATE = {
	error: null
};

const serviceReducer = (state = INITIAL_STATE, { type, service, error }) => {
	switch (type) {
		case CREATE_SERVICE_SUCCESS:
			return state;
		case CREATE_SERVICE_ERROR:
			return { ...state, error };
		case UPDATE_SERVICE_SUCCESS:
			return state;
		case UPDATE_SERVICE_ERROR:
			return { ...state, error };
		case DELETE_SERVICE_SUCCESS:
			return state;
		case DELETE_SERVICE_ERROR:
			return { ...state, error };
		default:
			return state;
	}
};

export default serviceReducer;
