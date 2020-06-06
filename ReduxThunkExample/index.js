/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { AppRegistry } from 'react-native';
import React from 'react';
import AppContainer from './app/containers/AppContainer';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store = {store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);