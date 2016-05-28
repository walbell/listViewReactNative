import React, { Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ListViewApp from '../components/ListViewApp';
import reducers from '../reducers';

const logger = createLogger(),
    createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore),
    store = createStoreWithMiddleware(reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ListViewApp />
            </Provider>
        );
    }
}
