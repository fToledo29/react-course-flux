import React from 'react'
import { Link } from 'react-router-dom'
import ProductsApi from '../../data/products-api';

export const ProductDetail = (props) => {

	const productId = props.match.params.productId;

	let product;

	const  getProductDetails = async () => {
		await ProductsApi.getAllProduct(productId).then((productDetails) => {
			product = productDetails;
		}).catch((error) => {
			console.log("Error: ", error);
		});
	}

	getProductDetails();

	return (
		<div className="product-details">
			<h1>Produc Details</h1>	
			<div className="product-detail">
				<span>Product Name: </span>
				<span>{product.id}</span>
			</div>
			<div className="product-detail">
				<span>Product Name: </span>
				<span>{product.productName}</span>
			</div>
			<div className="product-detail">
				<span>Product Name: </span>
				<span>{product.quantity}</span>
			</div>
			<div className="product-detail">
				<span>Product Name: </span>
				<span>{product.Price}</span>
			</div>

			<Link to="/products" > Back </Link>
				
		</div>
	)
}

