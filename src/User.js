import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/User/Home/Home';
import About from './views/User/About/About';
import PriceList from './views/User/PriceList/PriceList';
import Staff from './views/User/Staff/Staff';
import Contact from './views/User/Contact/Contact';
import Booking from './views/User/Booking/Booking';

export default class User extends Component {
	render() {
		return (
			<Router>
				<Layout className='layout'>
					<Layout.Header>
						<Navbar />
					</Layout.Header>
					<Layout.Content>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/about' component={About} />
							<Route path='/pricelist' component={PriceList} />
							<Route path='/staff' component={Staff} />
							<Route path='/contact' component={Contact} />
							<Route path='/booking' component={Booking} />
						</Switch>
					</Layout.Content>
					<Footer />
				</Layout>
			</Router>
		);
	}
}
