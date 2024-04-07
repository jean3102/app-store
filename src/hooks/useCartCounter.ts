import { useEffect, useState } from 'react';
import useCart from './useCart';

const useCartCounter = () => {
	const [quantity, setQuantity] = useState(0);
	const { productsList } = useCart();
	useEffect(() => {
		setQuantity(5);
		console.log(`🚀 ------------ productsList:`, productsList);
	}, [productsList]);
	return { quantity };
};

export default useCartCounter;
