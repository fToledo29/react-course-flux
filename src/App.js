import React from 'react';
import './App.css';
import AllProductsPage from './components/all-products-page/all-products-page';
import { BrowserRouter as  Router, NavLink, Route, Switch } from 'react-router-dom';
import { About } from './components/about/about';
import FormikAddForm from './components/add/add-form';
import { ProductDetail } from './components/product-detail/product-details';
import AddProductPage from './components/add-product-page/add-product-page';


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
					<Route path="/addProduct" component={AddProductPage} />
					<Route path="/product/:productId" component={ProductDetail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
