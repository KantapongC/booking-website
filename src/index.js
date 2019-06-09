import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Booking from './views/Booking/Booking';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Navbar />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/booking' component={Booking} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
