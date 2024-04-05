import { Product, ProductCategory } from '../types/product';

export const getProducts = async (): Promise<[Product]> => {
	const data = await fetch('https://fakestoreapi.com/products');
	return data.json();
};
export const getProductCategory = async (): Promise<[ProductCategory]> => {
	const data = await fetch('https://fakestoreapi.com/products/categories');
	return data.json();
};
