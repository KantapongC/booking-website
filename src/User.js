import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './views/Admin/Dashboard';
import Home from './views/Home/Home';
import About from './views/About/About';
import PriceList from './views/PriceList/PriceList';
import Staff from './views/Staff/Staff';
import Contact from './views/Contact/Contact';
import Booking from './views/Booking/Booking';
import Footer from './components/Footer/Footer';

export default class User extends Component {
	render() {
		return (
			<div>
				<Layout className='layout'>
					<Layout.Header>
						<Navbar />
					</Layout.Header>
				</Layout>
				<Switch>
					<Route path='/admin' component={Dashboard} />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/pricelist' component={PriceList} />
					<Route path='/staff' component={Staff} />
					<Route path='/contact' component={Contact} />
					<Route path='/booking' component={Booking} />
				</Switch>
				<Layout>
					<Footer />
				</Layout>
			</div>
		);
	}
}
