import './css/input.css';
type InputProps = {
	type: string;
	placeholder?: string;
};

const Input = ({ placeholder, type }: InputProps) => {
	return (
		<>
			<div className="group">
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
