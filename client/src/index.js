import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Admin from './Admin';
import User from './User';

import setAuthToken from './store/utils/setAuthToken';

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/admin' component={Admin} />
				<Route component={User} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
