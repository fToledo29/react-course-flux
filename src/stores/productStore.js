import { EventEmitter }from 'events'
import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from '../constants/action-types';

let _products = [];

class ProductStoreClass extends EventEmitter {
	addChangelistener(cb) {
		this.on('change', cb);
	}

	removeChangeListener(cb) {
		this.removeListener('change', cb);
	}

	emitChange() {
		this.emit('change');
	}

	getAllProducts() {
		return _products; 
	}
}

let ProductStore = new ProductStoreClass();

export default ProductStore;

Dispatcher.register(action => {
	switch (action.actionType) {
		case  ActionTypes.INITIALIZE:
			_products = action.products;
			ProductStore.emitChange();
			break;
		case  ActionTypes.ADD_PRODUCT:
			_products.push(action.product);
			ProductStore.emitChange();
			break;
		default:
			break;
	}
})