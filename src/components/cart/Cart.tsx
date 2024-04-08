import { useCart } from '../../hooks';
import ShoppingList from './ShoppingList';
import TotalShoppingAmount from './TotalShoppingAmount';
import './css/cart.css';
const Cart = () => {
	const { productsList, quantity } = useCart();
	console.log(`🚀 ------------ productsList:`, productsList);
	console.log(`🚀 ------------ quantity:`, quantity);
	return (
		<>
			<section className="headSide">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
					/>
				</svg>
				<h2>My Cart</h2>
			</section>
			<section className="bodySide">
				<section className="leftSide">
					<ShoppingList/>
				</section>
				<section className="rightSide">
					<TotalShoppingAmount/>
				</section>
			</section>
		</>
	);
};

export default Cart;
