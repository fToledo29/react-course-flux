import React from 'react';
import './App.css';
import AllProductsPage from './components/all-products-page/all-products-page';
import { BrowserRouter as  Router, NavLink, Route, Switch } from 'react-router-dom';
import { About } from './components/about/about';


class Links extends React.Component {

	render() {
		return (
			<nav>
				<NavLink className="nav-link" exact activeClassName="active" to="/">About</NavLink>
				<NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
			</nav>
		)
	}
}

function App() {

	return (
		<Router>
			<Links />
			<div className="App">
				<Switch>
					<Route exact path="/" component={About} />
					<Route path="/products" component={AllProductsPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
