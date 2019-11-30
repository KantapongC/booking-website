import { CREATE_SERVICE_NAME_SUCCESS, CREATE_SERVICE_NAME_ERROR, UPDATE_SERVICE_NAME_SUCCESS, UPDATE_SERVICE_NAME_ERROR, DELETE_SERVICE_NAME_SUCCESS, DELETE_SERVICE_NAME_ERROR } from '../actions/serviceNameActions';

const INITIAL_STATE = {
	error: null
};

const serviceReducer = (state = INITIAL_STATE, { type, service, error }) => {
	switch (type) {
		case CREATE_SERVICE_NAME_SUCCESS:
			return state;
		case CREATE_SERVICE_NAME_ERROR:
			return { ...state, error };
		case UPDATE_SERVICE_NAME_SUCCESS:
			return state;
		case UPDATE_SERVICE_NAME_ERROR:
			return { ...state, error };
		case DELETE_SERVICE_NAME_SUCCESS:
			return state;
		case DELETE_SERVICE_NAME_ERROR:
			return { ...state, error };
		default:
			return state;
	}
};

export default serviceReducer;
