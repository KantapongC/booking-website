import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeReducer from './employeeReducer';
import serviceReducer from './serviceReducer';
import alert from './alert';

const rootReducer = combineReducers({
	auth: authReducer,
	service: serviceReducer,
	employee: employeeReducer,
	alert
});

export default rootReducer;
