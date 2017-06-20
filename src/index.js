import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history';
import store from './store';
import './index.css';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={createBrowserHistory()}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


