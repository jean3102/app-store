import './css/button.css';

type ButtonsProps = {
	children: React.ReactNode;
	color?: string;
	onClick: () => void;
};

const Button = ({ onClick, color, children }: ButtonsProps) => {
	return (
		<button
			className="button"
			onClick={onClick}
			style={{ backgroundColor: color }}>
			{children}
		</button>
	);
};

export default Button;
