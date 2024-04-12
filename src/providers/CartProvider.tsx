import { useState } from 'react';
import { CartContext } from '../contexts/CarContext';
import { Cart } from '../types/cart';
import { notyf } from '../libs/notifications/noty';

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
		} else {
			setCart([...cart, product]);
		}

		notyf.success('Added to Cart');
	};

	const subtractQuantity = (id: number) => {
		const newProduct = cart.map((item) => {
			if (item.id === id) {
				if (item.quantity < 1) {
					notyf.error('Quantity must be greater than zero');
					return item;
				}
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});

		const filterProduct = newProduct.filter((item) =>
			item.quantity > 0 ? item : ''
		);
		setCart(filterProduct);
		setQuantity((prevValue) => prevValue - 1);
	};

	const addQuantity = (id: number) => {
		const newProduct = cart.map((item) =>
			item.id === id ? { ...item, quantity: item.quantity + 1 } : item
		);
		setCart(newProduct);
		setQuantity((prevValue) => prevValue + 1);
	};

	const removeProduct = (id: number, quantityValue: number) => {
		if (cart.some((item) => item.id === id)) {
			const newProduct = cart.filter((item) => {
				setQuantity(quantity - quantityValue);
				return item.id !== id;
			});
			setCart(newProduct);
		}
	};

	return (
		<CartContext.Provider
			value={{
				subtractQuantity: subtractQuantity,
				addQuantity: addQuantity,
				productsList: cart,
				addToCart: addToCart,
				quantity: quantity,
				removeProduct: removeProduct,
			}}>
			{children}
		</CartContext.Provider>
	);
};
