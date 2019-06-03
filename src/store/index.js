import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, Reducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor }
}