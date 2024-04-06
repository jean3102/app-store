import { CategoryParam, Product } from '../types/product';

export const getProducts = async ({
	param,
}: CategoryParam): Promise<[Product]> => {
	let URL = 'https://fakestoreapi.com/products';
	
	if (param && param !== 'all') {
		URL = `https://fakestoreapi.com/products/category/${param}`;
	}

	const data = await fetch(URL);
	return data.json();
};

export const getProductCategory = async (): Promise<[]> => {
	const data = await fetch('https://fakestoreapi.com/products/categories');
	return data.json();
};
