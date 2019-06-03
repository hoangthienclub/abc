import { combineReducers } from 'redux';
import auth from './auth/reducer'

export const Reducers = combineReducers(
  {
    auth: auth
  }
);