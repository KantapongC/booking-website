import axios from 'axios';
import { setAlert } from '../actions/alert';
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
} from './types';

export const createService = newService => async dispatch => {
	try {
		dispatch({ type: CREATE_SERVICE_LOADING });

		const res = await axios.post('/api/services/create', newService);

		dispatch({ type: CREATE_SERVICE_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: CREATE_SERVICE_ERROR, error });
		dispatch(setAlert('การเพิ่มรายการไม่สำเร็จ', 'danger'));
	}
};

export const getService = options => async dispatch => {
	try {
		const { startDate, endDate } = options;

		const res = await axios.get(`/api/services?startDate=${startDate}&endDate=${endDate}`);

		dispatch({ type: GET_SERVICE_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: GET_SERVICE_ERROR, error });
	}
};

export const updateService = service => {
	return async (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		const formattedService = {
			...service,
			updatedAt: new Date()
		};

		delete formattedService.id;
		delete formattedService.key;

		try {
			await firestore
				.collection('services')
				.doc(service.id)
				.update(formattedService);

			dispatch({ type: UPDATE_SERVICE_SUCCESS, service });
		} catch (error) {
			dispatch({ type: UPDATE_SERVICE_ERROR, error });
		}
	};
};

export const deleteService = service => {
	return async (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		try {
			await firestore
				.collection('services')
				.doc(service.id)
				.delete();

			dispatch({ type: DELETE_SERVICE_SUCCESS, service });
		} catch (error) {
			dispatch({ type: DELETE_SERVICE_ERROR, error });
		}
	};
};
