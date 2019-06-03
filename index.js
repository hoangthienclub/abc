/**
 * RN-Redux
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import factory from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = factory();

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxApp);
