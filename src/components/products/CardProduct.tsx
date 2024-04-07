import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/product';
import '../css/cardProduct.css';
type cardProductProps = {
	products: Product;
};

const CardProduct = ({ products }: cardProductProps) => {
	const { id, image, title, price, description, category, rating } = products;
	const { addToCart } = useCart();

	return (
		<div className="page-wrapper">
			<div className="page-inner">
				<div className="row">
					<div className="el-wrapper">
						<div className="box-up">
							<img
								className="img"
								src={image}
								alt={title}
							/>
							<div className="img-info">
								<div className="info-inner">
									<span className="p-name">{title}</span>
									<span className="p-company">{category}</span>
								</div>
								<div className="product-description">
									<p>{description}</p>
								</div>
							</div>
						</div>

						<div className="box-down">
							<div className="h-bg">
								<div className="h-bg-inner"></div>
							</div>

							<a
								onClick={() =>
									addToCart({
										id: id,
										name: title,
										price: price,
										quantity: 1,
									})
								}
								className="cart"
								href="#">
								<span className="price">${price} </span>
								<div className="start">
									{[...Array(Math.round(rating.rate)).keys()].map(
										(_, index) => (
											<svg
												key={index}
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="m7.69 19.346l1.614-5.33L5.115 11h5.216L12 5.462L13.67 11h5.215l-4.189 3.015l1.614 5.331L12 16.07l-4.31 3.277Z"
												/>
											</svg>
										)
									)}
								</div>
								<span className="add-to-cart">
									<span className="txt">Add in cart</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
