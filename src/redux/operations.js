import axios from 'axios';
import {
  fetchingInProgress,
  fetchinfSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://648dc1aa2de8d0ea11e82de2.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchinfSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
