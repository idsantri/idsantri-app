import { Dialog } from 'quasar';
import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

async function update({ endPoint, data, rerender, resolve }) {
	try {
		const response = await apiTokened.put(endPoint, data);
		notifySuccess(response.data.message);
		if (rerender) forceRerender();
		resolve(true);
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(error);
		}
	}
}

function updateData({ endPoint, data, message, rerender, confirm }) {
	return new Promise(async (resolve) => {
		if (confirm) {
			Dialog.create({
				title: 'Konfirmasi',
				message:
					message ||
					`<span style="color:'red'">Update data ini?</span>`,
				cancel: true,
				persistent: false,
				html: true,
			}).onOk(async () => {
				await update({ endPoint, data, rerender, resolve });
			});
		} else {
			await update({ endPoint, data, rerender, resolve });
		}
	});
}

export default updateData;
