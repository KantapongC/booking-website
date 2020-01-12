import axios from 'axios';
import { setAlert } from '../actions/alert';
import {
  CREATE_SERVICE_LOADING,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_ERROR,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_ERROR,
  UPDATE_SERVICE_LOADING,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_ERROR,
  DELETE_SERVICE_LOADING,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_ERROR
} from './types';

export const createService = newService => async dispatch => {
  try {
    dispatch({ type: CREATE_SERVICE_LOADING });

    const res = await axios.post('/api/services/create', newService);

    dispatch({ type: CREATE_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert('การเพิ่มรายการสำเร็จ', 'success'));
  } catch (error) {
    dispatch({ type: CREATE_SERVICE_ERROR, error });
    dispatch(setAlert('การเพิ่มรายการไม่สำเร็จ', 'danger'));
  }
};

export const getService = options => async dispatch => {
  try {
    const { startDate, endDate } = options;

    const res = await axios.get(`/api/services?startDate=${startDate}&endDate=${endDate}`);

    dispatch({ type: GET_SERVICE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SERVICE_ERROR, error });
  }
};

export const updateService = service => async dispatch => {
  try {
    dispatch({ type: UPDATE_SERVICE_LOADING });
    const res = await axios.put(`/api/services/${service._id}`, service);

    dispatch({ type: UPDATE_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert(`การแก้ไขรายการ "${service.serviceName}" สำเร็จ`, 'success'));
  } catch (error) {
    dispatch({ type: UPDATE_SERVICE_ERROR, error });
    dispatch(setAlert(`การแก้ไขรายการ "${service.serviceName}" ไม่สำเร็จ`, 'danger'));
  }
};

export const deleteService = service => async dispatch => {
  try {
    dispatch({ type: DELETE_SERVICE_LOADING });
    const res = await axios.delete(`/api/services/${service._id}`);

    dispatch({ type: DELETE_SERVICE_SUCCESS, payload: res.data });
    dispatch(setAlert(`การลบรายการ "${service.serviceName}" สำเร็จ`, 'success'));
  } catch (error) {
    dispatch({ type: DELETE_SERVICE_ERROR, error });
    dispatch(setAlert(`การลบรายการ "${service.serviceName}" ไม่สำเร็จ`, 'danger'));
  }
};
