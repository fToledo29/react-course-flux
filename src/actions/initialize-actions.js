import ProductsApi from '../data/products-api';
import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from '../constants/action-types';

export default class InitializeActions {
	static initProducts() {
		const initialProducts = ProductsApi.getAllProducts();

		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			products: initialProducts
		})
	}
}