import axios from 'axios';
import _ from 'lodash';
import { BASE_URL } from '../utils/constants';
// import { showErrorMessage } from '../containers/HomePage/actions'
// import { clearAuthInfo } from '../containers/ProfileWrapper/actions'


export const defaultOptions = {
  baseURL: BASE_URL,
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  accept: 'application/json'
};
export default function sendRequest(url, options = {}) {
  const appState = JSON.parse(localStorage.getItem('appState'));

  const authInfo = appState != null && appState.authInfo != null ? appState.authInfo : {};

  if (_.get(authInfo, 'access_token')) {
    defaultOptions.headers['Authorization'] = 'Bearer ' + _.get(authInfo, 'access_token');
  }

  const { store } = defaultOptions;

  const cloneOptions = { ...defaultOptions }
  delete cloneOptions.store

  return axios.request(url, { ...cloneOptions, ...options })
    .then(data => {
      if (_.get(data, ['data', 'code']) === 403) {
        // store.dispatch(showErrorMessage('Your session is expired, please login again!'));
        setTimeout(() => {
          store.dispatch(clearAuthInfo())
        }, 1500)
      }
      return data
    })
    .catch(err => {
      if (defaultOptions.store) {
        // store.dispatch(showErrorMessage(err.message || err));
      }
      // server has error and did not response
      // throw err;
      if (!err.response) { throw err }
      // server has error but still response
      return err.response
    })
}
