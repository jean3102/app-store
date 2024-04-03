import { ProductType } from '../types/product';

export const getProducts = async (): Promise<ProductType[]> => {
	const data = await fetch(
		'https://api.escuelajs.co/api/v1/products?limit=20&offset=1'
	);
	return data.json();
};
