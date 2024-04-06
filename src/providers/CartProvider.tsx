import { useState } from 'react';
import { CartContext } from '../contexts/CarContext';
import { Cart } from '../types/cart';

type CartProviderType = {
	children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderType) => {
	const [cart, setCart] = useState<Cart[]>([]);

	const addToCart = (product: Cart) => {
		console.log(`🚀 ------------ product:`, product)
		setCart([...cart, product]);
	};

	return (
		<CartContext.Provider
			value={{
				productsList: cart,
				addToCart: addToCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};
