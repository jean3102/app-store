import { Product } from '../../types/product';
import '../css/cardProduct.css';
type cardProductProps = {
	products: Product;
};

const CardProduct = ({ products }: cardProductProps) => {
	const { images, title, price, description, category } = products;
	return (
		<div className="page-wrapper">
			<div className="page-inner">
				<div className="row">
					<div className="el-wrapper">
						<div className="box-up">
							<img
								className="img"
								src={images[0]}
								alt={title}
							/>
							<div className="img-info">
								<div className="info-inner">
									<span className="p-name">{title}</span>
									<span className="p-company">{category.name}</span>
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
								className="cart"
								href="#">
								<span className="price">${price}</span>
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
