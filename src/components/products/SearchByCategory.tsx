import useProductsCategory from '../../hooks/useProductsCategory';
import SelectList from '../nav/SelectList';
import './css/searchProduct.css';
import { useNavigate, useParams } from 'react-router-dom';

const SearchByCategory = () => {
	const { categories } = useProductsCategory();
	const { category } = useParams();
	const navigate = useNavigate();

	const handleSelectionChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const { value } = event.target;
		navigate(`/category/${value}`);
	};
	return (
		<section className="searchProduct">
			<SelectList
				value={category || 'all'}
				onChange={handleSelectionChange}
				data={categories}
				id="category-choice"
				name="categories"
			/>
		</section>
	);
};

export default SearchByCategory;
