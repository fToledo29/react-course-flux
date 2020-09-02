
import React from 'react';
import ProductActions from '../../actions/product-actions';
import { withRouter } from 'react-router-dom';
import FormikAddForm from '../add/add-form';

class AddProductPage extends React.Component {

	constructor(props) {
		super(props);
		this.saveProduct = this.saveProduct.bind(this);
	}

	saveProduct(product) {
		console.log('product to save: ', product);
		ProductActions.addProduct(product);
		this.props.history.push('/');
	}


	render() {
		return (
			<FormikAddForm onSave={this.saveProduct}></FormikAddForm>
		)
	}
}

export default withRouter(AddProductPage);