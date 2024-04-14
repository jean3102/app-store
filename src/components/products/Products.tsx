import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import '../../styles/products/products.css';
import { Suspense } from 'react';
import LazyLoadedImage from './LazyLoadedImage';
import Loading from '../Loading';
import ProductRating from './ProductRating';
import { useCart } from '../../hooks';
import PageError from '../PageError';

const Products = () => {
	const { category } = useParams();
	const { products, error, loading } = useProducts({ param: category });
	const { addToCart, quantity } = useCart();

	return (
		<ul className="products">
			{error ? (
				<PageError/>
			) : loading ? (
				<Loading />
			) : (
				products?.map(
					({ category, description, id, image, price, rating, title }) => (
						<li
							className="page-wrapper"
							key={id}>
							<div className="page-inner">
								<div className="row">
									<div className="el-wrapper">
										<div className="box-up">
											<Suspense fallback={<Loading />}>
												<LazyLoadedImage
													src={image}
													alt={title}
												/>
											</Suspense>
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
														index: quantity,
														id: id,
														img: image,
														name: title,
														price: price,
														quantity: 1,
													})
												}
												className="cart"
												href="#">
												<span className="price">${price} </span>
												<div className="start">
													<ProductRating rating={rating.rate} />
												</div>
												<span className="add-to-cart">
													<span className="txt">Add in cart</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					)
				)
			)}
		</ul>
	);
};

export default Products;
