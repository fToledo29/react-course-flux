import axios from 'axios';
export default class ProductsApi {
	static getAllProducts() {
		return axios.get('http://localhost:3004/products');
	}

	static saveProduct(product) {
		return axios.post('http://localhost:3004/products/', product);
	}

	static getAllProduct(productId) {
		return axios.get('http://localhost:3004/products/' + productId);
	}
}