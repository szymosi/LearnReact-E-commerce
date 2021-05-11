import React from 'react';

import HomePage from './pages/homepage/homepage.component';

import './App.css';
import { Route } from 'react-router-dom';

const HatsPage = (props) => (
	< div >
		<h1>HATS</h1>
	</div >
);

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop/hats' component={HatsPage} />
			</div>
		);
	}
}

export default App;
