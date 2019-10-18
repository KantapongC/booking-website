export const CREATE_SERVICE_SUCCESS = 'SERVICE:CREATE_SUCCESS';
export const CREATE_SERVICE_ERROR = 'SERVICE:CREATE_ERROR';
export const UPDATE_SERVICE_SUCCESS = 'SERVICE:UPDATE_SUCCESS';
export const UPDATE_SERVICE_ERROR = 'SERVICE:UPDATE_ERROR';

export const createService = newService => {
	return async (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		try {
			await firestore.collection('services').add({
				...newService,
				createdAt: new Date()
			});

			dispatch({ type: CREATE_SERVICE_SUCCESS, newService });
		} catch (error) {
			dispatch({ type: CREATE_SERVICE_ERROR, error });
		}
	};
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
