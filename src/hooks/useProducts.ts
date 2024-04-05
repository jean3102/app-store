import { useEffect, useState } from 'react';
import { getProducts } from '../services/products';
import { CategoryParam, Product } from '../types/product';

const useProducts = ({ param }: CategoryParam) => {
	const [products, setProducts] = useState<Product[]>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts({ param });
				setProducts(response);
			} catch (error) {
				if (error instanceof Error) {
					setError(`Caught an error:${error.message}`);
				} else {
					// Handling non-Error types of errors
					setError(`Caught a non-Error type of error:${error}`);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, [param]);

	return { products, loading, error };
};

export default useProducts;
