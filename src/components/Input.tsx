import './css/input.css';
type InputProps = {
	type: string;
	placeholder?: string;
	value?: number | string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
	readonly?: boolean;
};

const Input = ({
	placeholder,
	type,
	value,
	onChange,
	readonly,
}: InputProps) => {
	return (
		<>
			<div className="group">
				<input
					readOnly={readonly}
					onChange={onChange}
					value={value || ''}
					placeholder={placeholder}
					type={type}
					className="input"
				/>
			</div>
		</>
	);
};

export default Input;
