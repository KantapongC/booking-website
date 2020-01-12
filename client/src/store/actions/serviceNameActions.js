import axios from 'axios';
import { setAlert } from '../actions/alert';
import {
  CREATE_SETTING_SERVICE_SUCCESS,
  CREATE_SETTING_SERVICE_ERROR,
  GET_SETTING_SERVICE_SUCCESS,
  GET_SETTING_SERVICE_ERROR,
  UPDATE_SETTING_SERVICE_SUCCESS,
  UPDATE_SETTING_SERVICE_ERROR,
  DELETE_SETTING_SERVICE_SUCCESS,
  DELETE_SETTING_SERVICE_ERROR
} from './types';

export const createServiceRules = newService => async dispatch => {
  try {
    const res = await axios.post('/api/servicerules/create', newService);

    dispatch({ type: CREATE_SETTING_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert('การเพิ่มรายการสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: CREATE_SETTING_SERVICE_ERROR, error });
    dispatch(setAlert('การเพิ่มรายการไม่สำเร็จ', 'dangers'));
  }
};

export const getServiceRules = () => async dispatch => {
  try {
    const res = await axios.get('api/servicerules/');

    dispatch({ type: GET_SETTING_SERVICE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SETTING_SERVICE_ERROR, error });
  }
};

export const updateServiceRule = service => async dispatch => {
  try {
    const res = await axios.put(`/api/servicerules/${service._id}`, service);

    dispatch({ type: UPDATE_SETTING_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert('การแก้ไขายการสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: UPDATE_SETTING_SERVICE_ERROR, error });
    dispatch(setAlert('การแก้ไขรายการไม่สำเร็จ', 'danger'));
  }
};

export const deleteServiceRule = service => async dispatch => {
  try {
    const res = await axios.delete(`/api/servicerules/${service._id}`);

    dispatch({ type: DELETE_SETTING_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert('การลบรายการสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: DELETE_SETTING_SERVICE_ERROR, error });
    dispatch(setAlert('การลบรายการไม่สำเร็จ', 'danger'));
  }
};
