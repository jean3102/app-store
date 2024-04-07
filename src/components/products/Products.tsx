import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './css/products.css';

import CardProduct from './CardProduct';

const Products = () => {
	const { category } = useParams();
	const { products } = useProducts({ param: category });

	return (
		<section className="products">
			{products?.map((product) => (
				<CardProduct
					products={product}
					key={product.id}
				/>
			))}
		</section>
	);
};

export default Products;
