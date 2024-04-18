import { useCart } from '../../hooks';
import ShoppingList from './ShoppingList';
import TotalShoppingAmount from './Invoices';
import '../../styles/cart/cart.css';
const Cart = () => {
	const { productsList } = useCart();

	return (
		<>
			<section className="bodyCart">
				<section className="shoppingListCart">
					<ShoppingList />
				</section>
				{productsList.length > 0 ? (
					<section>
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
