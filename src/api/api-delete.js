import { Dialog } from 'quasar';
import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

function deleteData({
	endPoint,
	message,
	rerender,
	params,
	loading,
	notify = true,
}) {
	return new Promise((resolve) => {
		Dialog.create({
			title: 'Konfirmasi',
			message:
				message || `<span style="color:'red'">Hapus data ini?</span>`,
			cancel: true,
			persistent: false,
			html: true,
		}).onOk(async () => {
			try {
				if (loading && typeof loading.value === 'boolean')
					loading.value = true;
				const response = await apiTokened.delete(endPoint, { params });
				if (notify) notifySuccess(response.data.message);
				if (rerender) forceRerender();
				resolve(true);
			} catch (error) {
				const message = error?.response?.data?.message;
				if (message) {
					toArray(message).forEach((msg) => notifyError(msg));
				} else {
					console.log(error);
				}
			} finally {
				if (loading && typeof loading.value === 'boolean')
					loading.value = false;
			}
		});
	});
}

export default deleteData;
