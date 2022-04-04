import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/:id">
							<Header />
							<Main />
							<Footer />
						</Route>
						<Route>
							<Redirect to="/stoichodimov" />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
