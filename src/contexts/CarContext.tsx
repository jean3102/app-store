import { createContext } from 'react';
import { Cart } from '../types/cart';

type CartContextType = {
	productsList: Cart[];
	quantity: number;
	addToCart: (product: Cart) => void;
	subtractQuantity: (id: number) => void;
	addQuantity: (id: number) => void;
	removeProduct: (id: number, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
	undefined
);
