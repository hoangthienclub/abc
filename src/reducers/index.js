import { combineReducers } from 'redux';
import auth from './auth'
import app from './app'

export const Reducers = combineReducers(
  {
    auth: auth,
    app: app
  }
);