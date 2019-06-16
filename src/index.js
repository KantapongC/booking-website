import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import PriceList from './views/PriceList/PriceList';
import Staff from './views/Staff/Staff';
import Contact from './views/Contact/Contact';
import Booking from './views/Booking/Booking';
import Footer from './components/Footer/Footer';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

ReactDOM.render(
	<Router>
		<Navbar />
		<Layout className='layout'>
			<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/pricelist' component={PriceList} />
					<Route path='/staff' component={Staff} />
					<Route path='/contact' component={Contact} />
					<Route path='/booking' component={Booking} />
			</Switch>
			<Footer/>
		</Layout>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
