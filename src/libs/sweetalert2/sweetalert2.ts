import Swal from 'sweetalert2';
import { AlertType, ConfirmSuccess } from './types';

const sweetAlert = ({ title, text, icon }: AlertType) => {
	Swal.fire({
		title: title,
		text: text,
		icon: icon || 'success',
		showConfirmButton: false,
		timer: 1500,
	});
};

const confirmDelete = async (name: string): Promise<boolean> => {
	const alertStatus = await Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!',
	});

	if (alertStatus.isConfirmed) {
		sweetAlert({ title: 'Deleted!', text: `Your ${name} has been deleted.` });
	}
	return alertStatus.isConfirmed;
};

const confirmSuccess = async ({
	title,
	text,
}: ConfirmSuccess): Promise<boolean> => {
	const alertStatus = await Swal.fire({
		title: `${title}?`,
		text: text || '',
		icon: 'info',
		showCancelButton: true,
		confirmButtonColor: 'green',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, process it!',
	});

	if (alertStatus.isConfirmed) {
		sweetAlert({ title: 'Deleted!', text: `Your ${name} has been deleted.` });
	}
	return alertStatus.isConfirmed;
};

export { sweetAlert, confirmDelete, confirmSuccess };
