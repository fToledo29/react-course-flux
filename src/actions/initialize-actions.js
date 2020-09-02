import ProductsApi from '../data/products-api';
import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from '../constants/action-types';

export default class InitializeActions {
	static async initProducts() {

		let initialProducts = await ProductsApi.getAllProducts()
						.catch(error => console.log('Error getting products: ', error));
		
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			products: initialProducts.data
		});
	}
}