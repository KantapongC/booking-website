import { CREATE_SERVICE_SUCCESS, CREATE_SERVICE_ERROR } from '../actions/serviceActions';

const INITIAL_STATE = {
	error: null
};

const serviceReducer = (state = INITIAL_STATE, { type, service, error }) => {
	switch (type) {
		case CREATE_SERVICE_SUCCESS:
			return state;
		case CREATE_SERVICE_ERROR:
			return { ...state, error };
		default:
			return state;
	}
};

export default serviceReducer;
