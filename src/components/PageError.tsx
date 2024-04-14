import '../styles/components/pageError.css';
import Button from './Button';
const PageError = () => {
	return (
		<section className="empty-icon-container">
			<div className="animation-container">
				<div className="bounce">
				<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2">
							<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
							<path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20" />
							<path d="M12 12a8 8 0 0 0-7.464 4.928m8.415-9.575a12 12 0 0 0-9.88 4.111" />
							<path d="M12 12a8 8 0 0 0-.536-8.928m4.085 12.075a12 12 0 0 0 1.38-10.611" />
						</g>
					</svg>
				</div>
				<div className="pebble1"></div>
				<div className="pebble2"></div>
				<div className="pebble3"></div>
			</div>
			<div>
				<h2>0 results found</h2>
				<p>Sorry! We couldn't find any results.</p>
			</div>
			<Button onClick={() => location.reload()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20">
					<path
						fill="currentColor"
						d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4l-4-4z"
					/>
				</svg>
				Reload Page
			</Button>
		</section>
	);
};

export default PageError;
