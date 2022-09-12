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

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route path='/contact' component={Contact}></Route>
					<Route exact path='/articles' component={Articles}></Route>
					<Route exact path='/articles/:id' component={Article}></Route>
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
