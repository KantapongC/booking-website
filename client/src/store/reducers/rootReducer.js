import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import employeeReducer from './employeeReducer';
import serviceReducer from './serviceReducer';
import sampleFirestore from './sampleReducer';
import alert from './alert';

const rootReducer = combineReducers({
	auth: authReducer,
	// firestore: firestoreReducer,
	// firebase: firebaseReducer,
	// employee: employeeReducer,
	// service: serviceReducer,
	// sampleFirestore,
	alert
});

export default rootReducer;
