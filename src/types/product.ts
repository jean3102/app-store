export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	category: {
		id: number;
		name: string;
		image: string;
	};
};

export type ProductCategory = {
	id: number;
	name: string;
};
