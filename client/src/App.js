import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Dashboard from './components/header-directs/Dashboard';
import NoMatch from './components/NoMatch';

const App = () => (
	<Router>
		<div>
			<main>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route component={NoMatch} />
				</Switch>
			</main>
		</div>
	</Router>
);

export default App;