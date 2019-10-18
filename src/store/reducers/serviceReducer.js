import { CREATE_SERVICE_SUCCESS, CREATE_SERVICE_ERROR } from '../actions/serviceActions';

const INITIAL_STATE = {};

const serviceReducer = (state = INITIAL_STATE, { type, service, error }) => {
	switch (type) {
		case CREATE_SERVICE_SUCCESS:
			return state;
		case CREATE_SERVICE_ERROR:
			return state;
		default:
			return state;
	}
};

export default serviceReducer;
