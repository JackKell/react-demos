import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './reducer/RootReducer.reducer';
import { composeWithDevTools } from 'remote-redux-devtools';
import './index.css';

const history = createBrowserHistory();

const middleware = composeWithDevTools(applyMiddleware(createLogger, thunk, routerMiddleware(history)));

const store = createStore(RootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


