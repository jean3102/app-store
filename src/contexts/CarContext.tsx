import { createContext } from 'react';
import { Cart } from '../types/cart';

type CartContextType = {
	productsList: Cart[];
	quantity: number;
	addToCart: (product: Cart) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
	undefined
);
