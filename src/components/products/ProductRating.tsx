type ProductRatingProps = {
	rating: number;
};

const ProductRating = ({ rating }: ProductRatingProps) => {
	const fullStars = Math.floor(rating);

	const stars = [];
	for (let i = 0; i < 5; i++) {
		console.log(`🚀 ------------ i :`, i )
		if (i < fullStars) {
			stars.push(<span key={i} style={{'color':'orange'}}>&#9733;</span>);
		} else {
			stars.push(<span key={i} style={{'color':'#8080808c'}}>&#9734;</span>);
		}
	}

	return <div>{stars}</div>;
};

export default ProductRating;
