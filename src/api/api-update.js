import { Dialog } from 'quasar';
import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

async function confirmationDialog(message) {
	return new Promise((resolve) => {
		Dialog.create({
			title: 'Konfirmasi',
			message:
				message || `<span style="color:'red'">Update data ini?</span>`,
			cancel: true,
			persistent: false,
			html: true,
		})
			.onOk(async () => {
				resolve(true);
			})
			.onCancel(() => {
				resolve(false);
			})
			.onDismiss(() => {
				resolve(false);
			});
	});
}

async function update({ endPoint, data, rerender, loading, notify }) {
	try {
		if (loading && typeof loading.value === 'boolean') loading.value = true;
		const response = await apiTokened.put(endPoint, data);
		if (notify) notifySuccess(response.data.message);
		if (rerender) forceRerender();
		return response.data;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(`Error during update ${endPoint}`, error);
		}
		return false;
	} finally {
		if (loading && typeof loading.value === 'boolean')
			loading.value = false;
	}
}

async function updateData({
	endPoint,
	data,
	confirm,
	message,
	rerender,
	loading,
	notify = true,
}) {
	if (confirm) {
		const dialog = await confirmationDialog(message);
		return dialog
			? await update({ endPoint, data, rerender, loading, notify })
			: false;
	} else {
		return update({ endPoint, data, rerender, loading, notify });
	}
}

export default updateData;
