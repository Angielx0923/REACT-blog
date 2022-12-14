// Libraries
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home'
import Contact from './Components/Contact/Contact';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';
import Add from './Containers/Admin/Add/Add';
import routes from './routes';

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route exact path={routes.HOME} component={Home}></Route>
					<Route path={routes.CONTACT} component={Contact}></Route>
					<Route exact path={routes.ARTICLES} component={Articles}></Route>
					<Route exact path={routes.ARTICLES + '/:id'} component={Article}></Route>
					<Route exact path={routes.ADD} component={Add}></Route>
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
