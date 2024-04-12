import { useCart } from '../../hooks';
import ShoppingList from './ShoppingList';
import TotalShoppingAmount from './Invoices';
import '../../styles/cart/cart.css';
const Cart = () => {
	const { productsList, quantity } = useCart();
	console.log(`🚀 ------------ productsList:`, productsList);
	console.log(`🚀 ------------ quantity:`, quantity);
	return (
		<>
			<section className="bodySide">
				<section className="leftSide">
					<ShoppingList />
				</section>
				{productsList.length > 0 ? (
					<section className="rightSide">
						<TotalShoppingAmount />
					</section>
				) : (
					''
				)}
			</section>
		</>
	);
};

export default Cart;
