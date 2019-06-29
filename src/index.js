import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Admin from './Admin';
import User from './User';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/admin' component={Admin} />
			<Route exact path='/' component={User} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
