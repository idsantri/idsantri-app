import { notifyConfirm } from 'src/utils/notify';
import { apiTokened } from '.';

async function apiDownload({
	message = 'Download data yang dicetak?',
	endPoint,
	confirm = false,
	loading,
	params,
	fileName = 'dokumen',
}) {
	if (confirm) {
		const isConfirmed = await notifyConfirm(message, true);
		if (!isConfirmed) return false;
	}

	if (loading && typeof loading.value === 'boolean') loading.value = true;
	try {
		const response = await apiTokened.request({
			url: endPoint,
			method: 'GET',
			responseType: 'blob', // important
			headers: {
				'Content-Type': 'application/pdf',
			},
			params,
		});

		// console.log('response download', response);

		if (response) {
			const blob = new Blob([response.data], { type: 'application/pdf' });
			const href = URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.href = href;
			link.setAttribute('download', fileName + '.pdf');
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
		}
		return true;
	} catch (error) {
		console.error('error download', error);
	} finally {
		if (loading && typeof loading.value === 'boolean')
			loading.value = false;
	}
}

export default apiDownload;
