import { CartContext } from '../contexts/CarContext';
import useCartProvider from '../hooks/useCartProvider';

type CartProviderType = {
	children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderType) => {
	const {
		addQuantity,
		subtractQuantity,
		productsList,
		addToCart,
		quantity,
		removeProduct,
		confirmPurchase,
	} = useCartProvider();
	return (
		<CartContext.Provider
			value={{
				subtractQuantity: subtractQuantity,
				addQuantity: addQuantity,
				productsList: productsList,
				addToCart: addToCart,
				quantity: quantity,
				removeProduct: removeProduct,
				confirmPurchase: confirmPurchase,
			}}>
			{children}
		</CartContext.Provider>
	);
};
