import { useCart } from '../../hooks';
import Button from '../Button';
import './css/totalShoppingAmount.css';
const TotalShoppingAmount = () => {
	const { quantity } = useCart();
	const purchase = () => {};

	return (
		<>
			<div className="shopping">
				<div className="shopping__subheader-wrapper">
					<div className="shopping__subheader">
						<span className="shopping__help-text">
							you've purchased ({quantity}) items in our store:
						</span>
					</div>
				</div>

				<div className="shopping__cart">
					<h2 className="shopping__cart-title">Shopping:</h2>

					<ul className="shopping__cart-list">
						<li className="shopping__cart-item">
							<span className="shopping__item-name">Shopping cost</span>
							<span className="shopping__item-price">$48.00</span>
						</li>

						<li className="shopping__cart-item">
							<span className="shopping__item-name">Tax</span>
							<span className="shopping__item-price">$95.00</span>
						</li>

						<li className="shopping__cart-item">
							<span className="shopping__cart-total">Total</span>
							<span className="shopping__item-price">$268.00</span>
						</li>
					</ul>
					<Button onClick={purchase}>Make Purchase</Button>
				</div>
			</div>
		</>
	);
};

export default TotalShoppingAmount;
