import { Cart } from '../types/cart';
import { notyf } from '../libs/noty/noty';
import { confirmDelete, confirmSuccess } from '../libs/sweetalert2/sweetalert2';
import { useState } from 'react';


const useCartProvider = () => {
	const [productsList, setProductsList] = useState<Cart[]>([]);
	const [quantity, setQuantity] = useState(0);

	const addToCart = (product: Cart) => {
		setQuantity((prevValue) => prevValue + 1);
		if (productsList.some((item) => item.id === product.id)) {
			const newProduct = productsList.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + product.quantity }
					: item
			);

			setProductsList(newProduct);
		} else {
			setProductsList(
				[...productsList, product].sort((a, b) => a.index - b.index).reverse()
			);
		}

		notyf.success('Added to Cart');
	};

	const subtractQuantity = (id: number) => {
		const newProduct = productsList.map((item) => {
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
		setProductsList(filterProduct);
		setQuantity((prevValue) => prevValue - 1);
	};

	const addQuantity = (id: number) => {
		const newProduct = productsList.map((item) =>
			item.id === id ? { ...item, quantity: item.quantity + 1 } : item
		);
		setProductsList(newProduct);
		setQuantity((prevValue) => prevValue + 1);
	};

	const removeProduct = async (id: number, quantityValue: number) => {
		const confirm = await confirmDelete('product');
		if (!confirm) return;

		if (productsList.some((item) => item.id === id)) {
			const newProduct = productsList.filter((item) => {
				setQuantity(quantity - quantityValue);
				return item.id !== id;
			});
			setProductsList(newProduct);
		}
	};

	const confirmPurchase = async () => {
		const confirm = await confirmSuccess({ title: 'Make the purchase' });
		if (confirm) {
			setProductsList([]);
			setQuantity(0);
			
		}
	};

	return {
		subtractQuantity,
		addQuantity,
		productsList,
		addToCart,
		quantity,
		removeProduct,
		confirmPurchase,
	};
};

export default useCartProvider;
