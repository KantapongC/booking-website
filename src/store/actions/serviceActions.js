export const CREATE_SERVICE_SUCCESS = 'SERVICE:CREATE_SUCCESS';
export const CREATE_SERVICE_ERROR = 'SERVICE:CREATE_ERROR';

export const createService = service => {
	return async (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		try {
			await firestore.collection('services').add({
				...service,
				createdAt: new Date()
			});

			dispatch({ type: CREATE_SERVICE_SUCCESS, service });
		} catch (error) {
			dispatch({ type: CREATE_SERVICE_ERROR, error });
		}
	};
};
