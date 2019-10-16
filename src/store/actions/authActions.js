export const LOGIN_SUCCESS = 'user:login_success';
export const LOGIN_ERROR = 'user:login_error';
export const SIGNOUT_SUCCESS = 'user:signout_success';
export const SIGNOUT_ERROR = 'user:signout_error';

export const signIn = credentials => {
	return async (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		try {
			let email = credentials.email;
			await firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.SESSION)
				.then(() => {
					return firebase.auth().signInWithEmailAndPassword(email, credentials.password);
				});

			dispatch({ type: LOGIN_SUCCESS });
		} catch (error) {
			dispatch({ type: LOGIN_ERROR, error });
		}
	};
};

export const signOut = () => {
	return async (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		try {
			await firebase.auth().signOut();
			sessionStorage.removeItem('token');
			sessionStorage.removeItem('loginAt');

			dispatch({ type: SIGNOUT_SUCCESS });
		} catch (error) {
			dispatch({ type: SIGNOUT_ERROR, error });
		}
	};
};
