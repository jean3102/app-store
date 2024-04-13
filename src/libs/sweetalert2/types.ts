import { SweetAlertIcon } from 'sweetalert2';

export type AlertType = {
	title?: string;
	text?: string;
	icon?: SweetAlertIcon;
};


export type ConfirmSuccess = {
	title: string;
	text?: string;
};
