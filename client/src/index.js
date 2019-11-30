import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

import Admin from './Admin';
import User from './User';

// const store = createStore(
// 	rootReducer,
// 	compose(
// 		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
// 		reduxFirestore(firebaseConfig),
// 		reactReduxFirebase(firebaseConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }),
// 		process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
// 			? window.__REDUX_DEVTOOLS_EXTENSION__()
// 			: f => f
// 	)
// );

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// store.firebaseAuthIsReady.then(() =>
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
// );

serviceWorker.unregister();
