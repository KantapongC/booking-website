import {
	CREATE_SERVICE_LOADING,
	CREATE_SERVICE_SUCCESS,
	CREATE_SERVICE_ERROR,
	GET_SERVICE_SUCCESS,
	GET_SERVICE_ERROR,
	UPDATE_SERVICE_SUCCESS,
	UPDATE_SERVICE_ERROR,
	DELETE_SERVICE_SUCCESS,
	DELETE_SERVICE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
	error: null,
	isCreating: false
};

const serviceReducer = (state = INITIAL_STATE, { type, payload, error }) => {
	switch (type) {
		case CREATE_SERVICE_LOADING:
			return {
				...state,
				isCreating: true
			};

		case CREATE_SERVICE_SUCCESS:
			return {
				...state,
				isCreating: false
			};

		case CREATE_SERVICE_ERROR:
			return {
				...state,
				error
			};

		case GET_SERVICE_SUCCESS:
			return {
				...state,
				services: payload
			};

		case GET_SERVICE_ERROR:
			return {
				...state,
				error
			};

		case UPDATE_SERVICE_SUCCESS:
			return state;

		case UPDATE_SERVICE_ERROR:
			return {
				...state,
				error
			};

		case DELETE_SERVICE_SUCCESS:
			return state;

		case DELETE_SERVICE_ERROR:
			return {
				...state,
				error
			};

		default:
			return state;
	}
};

export default serviceReducer;
