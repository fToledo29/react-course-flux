import React from 'react'
import { Product } from '../product/product'
import './product-list.css';

export const ProductList = (props) => {

	let productData = [];
	
	productData = props.data;

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Product Name</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{productData.map((el, index) => {
					return <Product 
					key={index}
					id={el.id}
					productName={el.productName}
					quantity={el.quantity}
					price={el.price}
					></Product>

				})}
				
			</tbody>
		</table>
	)
}
