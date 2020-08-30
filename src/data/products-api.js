import axios from 'axios';
export default class ProductsApi {
	static getAllProducts() {
		return axios.get('http://localhost:3004/products');
	}
}