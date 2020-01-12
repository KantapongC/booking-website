import axios from 'axios';
import { setAlert } from '../actions/alert';
import {
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR
} from './types';

export const createEmployee = employee => async dispatch => {
  try {
    const res = await axios.post('/api/employees/create', employee);

    dispatch({ type: CREATE_EMPLOYEE_SUCCESS, payload: res.data });
    dispatch(setAlert('การเพิ่มพนักงานสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: CREATE_EMPLOYEE_ERROR, error });
    dispatch(setAlert('การเพิ่มพนักงานไม่สำเร็จ', 'danger'));
  }
};

export const getEmployee = () => async dispatch => {
  try {
    const res = await axios.get('/api/employees/');

    dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_EMPLOYEE_ERROR, error });
  }
};

export const updateEmployee = employee => async dispatch => {
  try {
    const res = await axios.put(`/api/employees/${employee._id}`, employee);

    dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: res.data });
    dispatch(setAlert('การแก้ไขพนักงานสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: UPDATE_EMPLOYEE_ERROR, error });
    dispatch(setAlert('การแก้ไขพนักงานไม่สำเร็จ', 'danger'));
  }
};

export const deleteEmployee = employee => async dispatch => {
  try {
    const res = await axios.delete(`/api/employees/${employee._id}`);

    dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: res.data });
    dispatch(setAlert('การลบพนักงานสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: DELETE_EMPLOYEE_ERROR, error });
    dispatch(setAlert('การลบพนักงานไม่สำเร็จ', 'danger'));
  }
};
