import { Dialog } from 'quasar';
import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

function deleteById({ endPoint, id, message, rerender }) {
	return new Promise((resolve, reject) => {
		Dialog.create({
			title: 'Konfirmasi',
			message:
				message || `<span style="color:'red'">Hapus data ini?</span>`,
			cancel: true,
			persistent: false,
			html: true,
		}).onOk(async () => {
			try {
				const response = await apiTokened.delete(`${endPoint}/${id}`);
				notifySuccess(response.data.message);
				if (rerender) forceRerender();
				resolve(true);
			} catch (error) {
				console.log(error);
				toArray(error.response?.data?.message)?.forEach((message) => {
					notifyError(message);
				});
				reject(false);
			}
		});
	});
}

export default deleteById;
