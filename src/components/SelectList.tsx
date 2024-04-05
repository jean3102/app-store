import './css/select.css';
type InputProps = {
	id: string;
	name: string;
	data: [] | undefined;
	onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectList = ({ id, name, data, onChange }: InputProps) => {
	return (
		<>
			<div className="group">
				<select
					className="selectList"
					name={name}
					id={id}
					onChange={onChange}>
					<option value="all">All</option>

					{data?.map((category, index) => {
						return (
							<option
								key={index}
								value={category}>
								{category}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
};

export default SelectList;