import { Routes, Route } from 'react-router-dom';
import { Home, ShoppingCart } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/shopping_cart"
					element={<ShoppingCart />}
				/>
			</Routes>
		</>
	);
}

export default App;
