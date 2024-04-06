import { CartProvider } from '../providers/CartProvider';
import Footer from './Footer';
import Header from './Header';

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<CartProvider>
			<Header />
			<main className="container">{children}</main>
			<Footer />
		</CartProvider>
	);
};

export default Container;
