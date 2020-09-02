import ProductsApi from '../data/products-api';
import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from '../constants/action-types';


export default class ProductActions {
	static async addProduct(product) {
		let newProduct = await ProductsApi.saveProduct(product)
					.catch(error => console.log('Error adding new product: ', error));

		console.log('newProduct: ', newProduct);

		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_PRODUCT,
			product: newProduct.data
		});
	}
}