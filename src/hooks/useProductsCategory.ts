import { useEffect, useState } from 'react';
import { getProductCategory } from '../services/products';

const useProductsCategory = () => {
	const [categories, setCategories] = useState<[]>();

	useEffect(() => {
		const fetchProductCategories = async () => {
			try {
				const response = await getProductCategory();
				setCategories(response);
			} catch (error) {
				if (error instanceof Error) {
					alert(`Caught an error:${error.message}`);
				} else {
					// Handling non-Error types of errors
					alert(`Caught a non-Error type of error:${error}`);
				}
			}
		};
		fetchProductCategories();
	}, []);

	return { categories };
};

export default useProductsCategory;
