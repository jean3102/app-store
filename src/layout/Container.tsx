import Footer from './Footer';
import Header from './Header';
import '../styles/layout/container.css'

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
