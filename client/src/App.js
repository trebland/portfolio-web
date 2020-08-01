import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Projects from './components/header-directs/Projects';
import NoMatch from './components/NoMatch';

const App = () => (
	<Router>
		<div>
			<main>
				<Switch>
					<Route exact path="/" component={Projects} />
					<Route component={NoMatch} />
				</Switch>
			</main>
		</div>
	</Router>
);

export default App;