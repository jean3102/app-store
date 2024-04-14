import { useEffect, useState } from 'react';
import { getProductCategory } from '../services/products';
import { notyf } from '../libs/noty/noty';

const useProductsCategory = () => {
	const [categories, setCategories] = useState<[]>();

	useEffect(() => {
		const fetchProductCategories = async () => {
			try {
				const response = await getProductCategory();
				setCategories(response);
			} catch (error) {
				if (error instanceof Error) {
					notyf.error(`Caught an error:${error.message}`);
				} else {
					// Handling non-Error types of errors
					notyf.error(`Caught a non-Error type of error:${error}`);
				}
			}
		};
		fetchProductCategories();
	}, []);

	return { categories };
};

export default useProductsCategory;
