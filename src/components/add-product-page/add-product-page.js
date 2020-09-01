
import React from 'react'
import { AddForm } from "../add/add-form"
import ProductActions from '../../actions/product-actions';
import { withRouter } from 'react-router-dom';

class AddProductPage extends React.Component {

	constructor(props) {
		super(props);
		this.saveProduct = this.saveProduct.bind(this);
	}

	saveProduct(product) {
		ProductActions.addProduct(product);
		this.props.history.push('/');
	}


	render() {
		return (
			<AddForm onSave={this.saveProduct}></AddForm>
		)
	}
}

export default withRouter(AddProductPage);