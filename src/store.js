import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './reducer/RootReducer.reducer';
import {composeWithDevTools} from 'remote-redux-devtools';

const middleware = composeWithDevTools(applyMiddleware(createLogger, thunk));

const store = createStore(RootReducer, middleware);

export default store;
