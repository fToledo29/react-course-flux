import ProductsApi from '../data/products-api';
import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from '../constants/action-types';


export default class ProductActions {
	static addProduct(product) {
		let newProduct = ProductsApi.saveProduct(product);

		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_PRODUCT,
			product: newProduct
		});
	}
}