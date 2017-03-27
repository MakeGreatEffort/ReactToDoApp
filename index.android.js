import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import App from './src/views/App'

const store = configureStore()

const ToDoApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ReactScreen', () => ToDoApp);
