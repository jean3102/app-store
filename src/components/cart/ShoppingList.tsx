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
								<Button onClick={() => subtractQuantity(id)}>
									{quantity === 1 ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16">
											<path
												fill="currentColor"
												d="m1.982 5.073l1.025 10.266c0 .366.307.661.684.661h7.58a.673.673 0 0 0 .684-.661L12.98 5.073H1.982zm6.051 8.995H6.961V6.989h1.072v7.079zm2 0H8.961l1-7.079h1.072l-1 7.079zm-4 0H4.961l-1-7.079h1.072l1 7.079zm7.042-11.963H9.937V.709C9.937.317 9.481 0 9.081 0H5.986c-.4 0-.955.225-.955.615v1.396l-3.145.094a.717.717 0 0 0-.727.708v1.155H13.8V2.813a.715.715 0 0 0-.725-.708zM5.947 1.44c0-.312.351-.565.783-.565h1.564c.432 0 .782.254.782.565v.665h-3.13V1.44h.001z"
											/>
										</svg>
									) : (
										'-'
									)}
								</Button>
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
