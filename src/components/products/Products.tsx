import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './css/products.css';
import { Suspense, lazy } from 'react';
import Loading from '../Loading';

const Products = () => {
	const LazyCardProduct = lazy(() => import('./CardProduct'));
	const { category } = useParams();
	const { products } = useProducts({ param: category });

	return (
		<Suspense fallback={<Loading />}>
			<section className="products">
				{products?.map((product) => (
					<LazyCardProduct
						products={product}
						key={product.id}
					/>
				))}
			</section>
		</Suspense>
	);
};

export default Products;
