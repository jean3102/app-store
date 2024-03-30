import Footer from './Footer';
import Header from './Header';

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
