import React, { Component } from 'react'
import { ProductList } from '../product-list/product-list'
import ProductsApi from '../../data/products-api';
import { Link } from 'react-router-dom';
import './all-products-page.css';

export default class AllProductsPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}


	componentDidMount() {
		ProductsApi.getAllProducts().then((products) => {
			this.setState({ products: products.data});
		}).catch((error) => {
			console.log("Error: ", error);
		});
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

