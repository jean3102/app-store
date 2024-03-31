import { Button } from '../components';
import Container from '../layout/Container';

const Home = () => {
	const callProduct = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => console.log(json));
	};
	const updatedProduct = () => {
		fetch('https://fakestoreapi.com/products/1', {
			method: 'PUT',
			body: JSON.stringify({
				title: 'test product',
				price: 13.5,
				description: 'lorem ipsum set',
				image: 'https://i.pravatar.cc',
				category: 'electronic',
			}),
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};
	const getCategory = () => {
		fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
	};
	return (
		<Container>
			<h1>Home</h1>

			<Button
				text="call product"
				color="blue"
				onClick={callProduct}
			/>
			<Button
				text="updated Product"
				color="orange"
				onClick={updatedProduct}
			/>
			<Button
				text="get Category"
				color="green"
				onClick={getCategory}
			/>
		</Container>
	);
};

export default Home;
