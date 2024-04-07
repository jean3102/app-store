import Container from '../layout/Container';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const Home = () => {
        const LazyProducts = lazy(() => import('../components/products/Products'));
        return (
            <Container>
                <Suspense fallback={<Loading />}>
                    <LazyProducts />
                </Suspense>
            </Container>
	);
};

export default Home;
