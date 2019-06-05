import axios from 'axios';
import _ from 'lodash';
import { BASE_URL_USER } from '../utils/constants';
// import { showErrorMessage } from '../containers/HomePage/actions'
// import { clearAuthInfo } from '../containers/ProfileWrapper/actions'
import { setNotification } from '../actions/app/actions';


export const defaultOptions = {
  baseURL: BASE_URL_USER,
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  accept: 'application/json'
};
export default function sendRequest(baseURL = BASE_URL_USER, url, options = {}) {
  const { store } = defaultOptions;
  defaultOptions.baseURL = baseURL;
  const cloneOptions = { ...defaultOptions }
  delete cloneOptions.store
  console.log(url)
  console.log(cloneOptions)
  return axios.request(url, { ...cloneOptions, ...options })
    .then(data => {
      if (_.get(data, ['data', 'code']) === 403) {
        // store.dispatch(showErrorMessage('Your session is expired, please login again!'));
        setTimeout(() => {  
          store.dispatch(clearAuthInfo())
        }, 1500)
      }
      if (_.get(data, ['data', 'code']) === 500) {
        const message = _.get(data, ['data', 'message'])
        store.dispatch(setNotification('danger', message));
      }
      // return data
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
