import { useEffect, useState } from 'react';
import { Invoices } from '../types/invoices';
import { Cart } from '../types/cart';
import { formatNumber } from '../utils/formatNumber';

const useInvoices = (productsList: Cart[]) => {
	const [invoices, setInvoices] = useState<Invoices>({
		shoppingCost: 1500,
		tax: 65,
		total: 1405,
	});
	useEffect(() => {
		const calculateInvoices = () => {
			const total = productsList.reduce(
				(acc, { price, quantity }) => acc + price * quantity,
				0
			);
			const tax = formatNumber((total * 4) / 100);
			setInvoices({
				shoppingCost: formatNumber(total),
				tax: tax,
				total: formatNumber(total - tax) ,
			});
		};
		calculateInvoices();
	}, [productsList]);
	return { invoices };
};

export default useInvoices;
