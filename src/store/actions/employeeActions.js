export const CREATE_EMPLOYEE_SUCCESS = 'EMPLOYEE:CREATE_SUCCESS';
export const CREATE_EMPLOYEE_ERROR = 'EMPLOYEE:CREATE_ERROR';

export const createEmployee = employee => {
	return async (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		try {
			await firestore.collection('employees').add({
				...employee,
				createdAt: new Date()
			});

			dispatch({ type: CREATE_EMPLOYEE_SUCCESS, employee });
		} catch (error) {
			dispatch({ type: CREATE_EMPLOYEE_ERROR, error });
		}
	};
};
