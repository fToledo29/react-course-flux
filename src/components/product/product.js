import React from 'react'

export const Product = (props) => {

	return (
		<tr>
			<td>
				{props.id}
			</td>
			<td>
				{props.productName}
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
