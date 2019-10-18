export const LOGIN_SUCCESS = 'USER:LOGIN_SUCCESS';
export const LOGIN_ERROR = 'USER:LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'USER:SIGNOUT_SUCCESS';
export const SIGNOUT_ERROR = 'USER:SIGNOUT_ERROR';

export const signIn = credentials => {
	return async (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		try {
			let email = credentials.username;
			if (credentials.username.indexOf('@') === -1) email += '@molsalon.com';

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
