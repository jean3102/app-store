import { CardProduct } from '..';
import useProducts from '../../hooks/useProducts';
import SearchProduct from './SearchProduct';
import './css/products.css';

const Products = () => {
	const { products } = useProducts();

	return (
		<>
			<SearchProduct />
			<section className="products">
				{products?.map((product) => (
					<CardProduct
						products={product}
						key={product.id}
					/>
				))}
			</section>
		</>
	);
};

export default Products;
