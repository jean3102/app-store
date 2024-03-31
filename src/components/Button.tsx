import './css/button.css';

type ButtonsProps = {
	text: string;
	color?: string;
	onClick: () => void;
};

const Button = ({ text, onClick, color }: ButtonsProps) => {
	return (
		<button
			className="button"
			onClick={onClick}
			style={{ backgroundColor: color }}>
			{text}
		</button>
	);
};

export default Button;
