import { useCart } from '../../hooks';
import Button from '../Button';
import '../../styles/cart/shoppingList.css';
import { formatNumber } from '../../utils/formatNumber';
import Hyperlink from '../Hyperlink';
import { Suspense } from 'react';
import LazyLoadedImage from '../LazyLoadedImage';
import Loading from '../Loading';

const ShoppingList = () => {
	const { productsList, subtractQuantity, addQuantity, removeProduct } =
		useCart();

	return (
		<section className="shoppingList">
			<h2>Shopping cart</h2>
			{productsList.length > 0 ? (
				<ul>
					{productsList.map(({ id, img, price, name, quantity }) => (
						<li key={id}>
							<Suspense fallback={<Loading />}>
								<LazyLoadedImage
									src={img}
									alt={name}
								/>
							</Suspense>
							<p>{name}</p>

							<section className="quantityContent">
								<Button onClick={() => subtractQuantity(id)}>-</Button>
								<span>{quantity}</span>
								<Button onClick={() => addQuantity(id)}>+</Button>
							</section>

							<section className="priceContent">
								<div>
									<span>${formatNumber(price * quantity)}</span>
									<span>${price} / per Item</span>
								</div>
								<Button onClick={() => removeProduct(id, quantity)}>
									Remove
								</Button>
							</section>
						</li>
					))}
				</ul>
			) : (
				<Hyperlink
					title="Your Cart is empty"
					textLink="Go to store">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 15 15">
						<path
							fill="currentColor"
							d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
						/>
					</svg>
				</Hyperlink>
			)}
		</section>
	);
};

export default ShoppingList;
