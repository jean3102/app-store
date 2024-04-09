import Button from '../Button';
import Input from '../Input';
import './css/shoppingList.css';
const ShoppingList = () => {
	const removeProduct = () => {};
	return (
		<section className="shoppingList">
			<h2>Your shopping cart</h2>
			<ul>
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			
				<li>
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt=""
					/>
					<p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
					<section className="priceContent">
						<Input type="number" />
						<div>
							<span>$2500</span>
							<span>$223 / per Item</span>
						</div>
					<Button onClick={removeProduct}>Remove</Button>
					</section>
				</li>
			

			</ul>
		</section>
	);
};

export default ShoppingList;
