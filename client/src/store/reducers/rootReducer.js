import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeReducer from './employeeReducer';
import serviceReducer from './serviceReducer';
import serviceRulesReducer from './serviceNameReducer';
import alert from './alert';

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  employee: employeeReducer,
  serviceSetting: serviceRulesReducer,
  alert
});

export default rootReducer;
