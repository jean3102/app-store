import Footer from './Footer';
import Header from './Header';

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<>
			<Header />
			<main className="container">{children}</main>
			<Footer />
		</>
	);
};

export default Container;
