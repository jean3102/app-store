import Footer from './Footer';
import Header from './Header';
import './css/container.css';

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Container;
