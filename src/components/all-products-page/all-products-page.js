import React, { Component } from 'react'
import { ProductList } from '../product-list/product-list'
import ProductsApi from '../../data/products-api';
import { Link } from 'react-router-dom';
import './all-products-page.css';
import ProductStore from '../../stores/productStore';
import InitializeActions from '../../actions/initialize-actions';

export default class AllProductsPage extends Component {

	constructor(props) {
		super(props);

		this._onChange =  this._onChange.bind(this);

		this.state = {
			products: ProductStore.getAllProducts()
		};
	}

	_onChange() {
		this.setState({products: ProductStore.getAllProducts()});
	}

	componentDidMount() {
		ProductStore.addChangelistener(this._onChange);
		InitializeActions.initProducts();
	}

	componentWillUnmount() {
		ProductStore.removeChangeListener(this._onChange)
	}

	render() {
		return (
			<div>
				<h1>Product list</h1>

				<div className="product-list">
					<ProductList data={this.state.products}></ProductList>
				</div>

				<div>
					<Link to={{ pathname: '/addProduct' }}> Add Products </Link>
				</div>		
			</div>
		)
	}
}

