import { CardProduct } from '..';
import useProducts from '../../hooks/useProducts';

const Products = () => {
	const { products} = useProducts();

	return (
		<>
			{products?.map((product) => (
				<CardProduct
					products={product}
					key={product.id}
				/>
			))}
		</>
	);
};

export default Products;
