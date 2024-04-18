import { Link } from 'react-router-dom';
import '../../styles/nav/navBar.css';
import SearchByCategory from '../products/SearchByCategory';
import CartBubble from './CartBubble';
const NavBar = () => {
	return (
		<nav className="navBar">
			<ul>
				<li>
					<Link to={'/'}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 1024 1024">
							<path
								fill="currentColor"
								d="M896 512q-53 0-90.5-37.5T768 384q0 53-37.5 90.5T640 512t-90.5-37.5T512 384q0 53-37.5 90.5T384 512t-90.5-37.5T256 384q0 53-37.5 90.5T128 512t-90.5-37.5T0 384q0-34 32-96l92-239q7-21 26-35t38-14h652q20 0 38.5 14T904 49l88 239q2 5 9.5 21.5t11.5 26t7.5 23.5t3.5 25q0 53-37.5 90.5T896 512zM64 896V640q0-27 19-45.5t45-18.5t45 18.5t19 45.5v256h192V640q0-27 18.5-45.5T448 576h128q27 0 45.5 18.5T640 640v256h192V640q0-27 19-45.5t45-18.5t45 18.5t19 45.5v256q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-26 0-45-19T0 959.5t19-45T64 896z"
							/>
						</svg>
						<span>App Store</span>
					</Link>
				</li>

				<li>
					<SearchByCategory />

					<CartBubble />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
