import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	employee: employeeReducer
});

export default rootReducer;
