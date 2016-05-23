import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import ListViewApp from './ListViewApp';

const reducer = combineReducers(reducers),
    store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ListViewApp />
            </Provider>
        );
    }
}
