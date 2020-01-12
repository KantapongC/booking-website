export const CREATE_SERVICE_NAME_SUCCESS = 'SERVICE_NAME:CREATE_SUCCESS';
export const CREATE_SERVICE_NAME_ERROR = 'SERVICE_NAME:CREATE_ERROR';
export const UPDATE_SERVICE_NAME_SUCCESS = 'SERVICE_NAME:UPDATE_SUCCESS';
export const UPDATE_SERVICE_NAME_ERROR = 'SERVICE_NAME:UPDATE_ERROR';
export const DELETE_SERVICE_NAME_SUCCESS = 'SERVICE_NAME:DELETE_SUCCESS';
export const DELETE_SERVICE_NAME_ERROR = 'SERVICE_NAME:DELETE_ERROR';

export const createServiceName = newService => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    try {
      await firestore.collection('serviceName').add({
        ...newService,
        createdAt: new Date()
      });

      dispatch({ type: CREATE_SERVICE_NAME_SUCCESS, newService });
    } catch (error) {
      dispatch({ type: CREATE_SERVICE_NAME_ERROR, error });
    }
  };
};

export const updateServiceName = service => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    const formattedService = {
      ...service,
      updatedAt: new Date()
    };

    delete formattedService.id;
    delete formattedService.key;

    try {
      await firestore
        .collection('serviceName')
        .doc(service.id)
        .update(formattedService);

      dispatch({ type: UPDATE_SERVICE_NAME_SUCCESS, service });
    } catch (error) {
      dispatch({ type: UPDATE_SERVICE_NAME_ERROR, error });
    }
  };
};

export const deleteServiceName = service => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    try {
      await firestore
        .collection('serviceName')
        .doc(service.id)
        .delete();

      dispatch({ type: DELETE_SERVICE_NAME_SUCCESS, service });
    } catch (error) {
      dispatch({ type: DELETE_SERVICE_NAME_ERROR, error });
    }
  };
};
