import { useState } from 'react';
import { CartContext } from '../contexts/CarContext';
import { Cart } from '../types/cart';

type CartProviderType = {
	children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderType) => {
	const [cart, setCart] = useState<Cart[]>([]);
	const [quantity, setQuantity] = useState(0);

	const addToCart = (product: Cart) => {
		setQuantity((prevValue) => prevValue + 1);
		
		if (cart.some((item) => item.id === product.id)) {
			const newProduct = cart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + product.quantity }
					: item
			);

			setCart(newProduct);
			return;
		}

		setCart([...cart, product]);
	};

	return (
		<CartContext.Provider
			value={{
				productsList: cart,
				addToCart: addToCart,
				quantity: quantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};
