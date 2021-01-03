import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './roots/rootReducer/rootReducer';
import { Provider } from 'react-redux';


function init() {
    const store = createStore(rootReducer);
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();
