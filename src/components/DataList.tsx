import { ProductCategory } from '../types/product';

type InputProps = {
	id: string;
	list: string;
	placeholder: string;
	data: ProductCategory[] | undefined;
};

const DataList = ({ id, list, placeholder, data }: InputProps) => {
	return (
		<>
			<div className="group">
				<input
					list={list}
					id={id}
					name={id}
					placeholder={placeholder}
					className="input"
				/>

				<datalist id={list}>
					{data?.map(({ id, name }) => (
						<option
							key={id}
							value={name}></option>
					))}
				</datalist>
			</div>
		</>
	);
};

export default DataList;
