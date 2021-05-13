import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

import './App.css';
import { Route } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</div>
		);
	}
}

export default App;
