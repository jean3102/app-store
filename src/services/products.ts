import { Product, ProductCategory } from '../types/product';

export const getProducts = async (): Promise<[Product]> => {
	const data = await fetch('https://api.escuelajs.co/api/v1/products');
	return data.json();
};
export const getProductCategory = async (): Promise<[ProductCategory]> => {
	const data = await fetch('https://api.escuelajs.co/api/v1/categories');
	return data.json();
};
