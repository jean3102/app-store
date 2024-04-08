import { Routes, Route } from 'react-router-dom';
import { Home, ShoppingCart } from './pages';
import { CartProvider } from './providers/CartProvider';

function App() {
	return (
		<CartProvider>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="category/:category"
					element={<Home />}
				/>

				<Route
					path="/shopping_cart"
					element={<ShoppingCart />}
				/>
			</Routes>
		</CartProvider>
	);
}

export default App;
