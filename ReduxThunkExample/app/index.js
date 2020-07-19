
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';
import { name as appName } from '../app.json';

import configureStore from './store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store = {store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
