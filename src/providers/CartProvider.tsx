import { useState } from 'react';
import { CartContext } from '../contexts/CarContext';
import { Cart } from '../types/cart';
import { notyf } from '../libs/noty/noty';
import { confirmDelete, confirmSuccess } from '../libs/sweetalert2/sweetalert2';
import { useNavigate } from 'react-router-dom';

type CartProviderType = {
	children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderType) => {
	const [cart, setCart] = useState<Cart[]>([]);
	const [quantity, setQuantity] = useState(0);
	const navigate = useNavigate();

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
			setCart([...cart, product].sort((a, b) => a.index - b.index).reverse());
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

	const removeProduct = async (id: number, quantityValue: number) => {
		const confirm = await confirmDelete('product');
		if (!confirm) return;

		if (cart.some((item) => item.id === id)) {
			const newProduct = cart.filter((item) => {
				setQuantity(quantity - quantityValue);
				return item.id !== id;
			});
			setCart(newProduct);
		}
	};

	const confirmPurchase = async () => {
		const confirm = await confirmSuccess({ title: 'Make the purchase' });
		if (confirm) {
			setCart([]);
			navigate('/');
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
				confirmPurchase: confirmPurchase,
			}}>
			{children}
		</CartContext.Provider>
	);
};
