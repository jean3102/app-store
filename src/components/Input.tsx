import './css/input.css';
type InputProps = {
	children: React.ReactNode;
	type: string;
	placeholder: string;
};

const Input = ({ children, placeholder, type }: InputProps) => {
	return (
		<>
			<div className="group">
				{children}
				<input
					placeholder={placeholder}
					type={type}
					className="input"
				/>
			</div>
		</>
	);
};

export default Input;
