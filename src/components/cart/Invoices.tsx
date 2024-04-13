import { useCart } from '../../hooks';
import Button from '../Button';
import '../../styles/cart/invoices.css';
import useInvoices from '../../hooks/useInvoices';
const Invoices = () => {
	const { quantity, productsList, confirmPurchase } = useCart();
	const { invoices } = useInvoices(productsList);

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
					<h2 className="shopping__cart-title">
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
						Shopping
					</h2>

					<ul className="shopping__cart-list">
						<li className="shopping__cart-item">
							<span className="shopping__item-name">Shopping cost</span>
							<span className="shopping__item-price">
								${invoices?.shoppingCost}
							</span>
						</li>

						<li className="shopping__cart-item">
							<span className="shopping__item-name">Tax</span>
							<span className="shopping__item-price">${invoices?.tax}</span>
						</li>

						<li className="shopping__cart-item">
							<span className="shopping__cart-total">Total</span>
							<span className="shopping__item-price">${invoices?.total}</span>
						</li>
					</ul>
					<Button onClick={() => confirmPurchase()}>Make Purchase</Button>
				</div>
			</div>
		</>
	);
};

export default Invoices;
