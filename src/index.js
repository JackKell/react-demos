import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import './index.css';

const reducer = (state={num: 0}, action) => {
    if(action.type === "INC"){
        return {...state, num: state.num + action.payload};
    } else if(action.type === "DEC"){
        return {...state, num: state.num - action.payload};
    } else {
        return state;
    }
};

const middleware = applyMiddleware(createLogger);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={createBrowserHistory()}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


