import React from 'react';
import { withFormik, Form, Field } from 'formik';
import './add-form.css';

export const AddForm = ({ values }) => {
	return (
		<div>
			<Form>
				<div className="form-field">
					<label>Product Name:</label>
					<Field value={values.productName} name="productName" placeholder="Product Name"/>
				</div>

				<div className="form-field">
					<label>Quantity:</label>
					<Field value={values.quantity} name="quantity" placeholder="Quantity"/>
				</div>

				<div className="form-field">
					<label>Price:</label>
					<Field value={values.price} name="price" placeholder="Price"/>
				</div>
			</Form>
		</div>
	)
}

const FormikAddForm = withFormik({
	mapPropsToValues({productName, quantity, price}){
		return {
			productName: productName || '',
			quantity: quantity || '',
			price: price || '',
		};
	}
})(AddForm);

export default FormikAddForm;

