import React from 'react'
import { Link } from 'react-router-dom'

export const Product = (props) => {


	const path = `/product/${props.id}`;

	return (
		<tr>
			<td>
				{props.id}
			</td>
			<td>
				<Link to={path} > {props.productName}</Link>
			</td>
			<td>
				{props.quantity}
			</td>
			<td>
				{props.price}
			</td>
		</tr>
	)
}
