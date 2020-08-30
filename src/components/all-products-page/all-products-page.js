import React, { Component } from 'react'
import { ProductList } from '../product-list/product-list'
import ProductsApi from '../../data/products-api';

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

				<ProductList data={this.state.products}></ProductList>		
			</div>
		)
	}
}

