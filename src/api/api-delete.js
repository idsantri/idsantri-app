import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess, notifyConfirm } from 'src/utils/notify';

async function deleteApi({ endPoint, loading, notify, rerender, params }) {
	try {
		if (loading && typeof loading.value === 'boolean') loading.value = true;
		const response = await apiTokened.delete(endPoint, { params });
		if (notify) notifySuccess(response.data.message);
		if (rerender) forceRerender();
		return true;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(error);
		}
		return false;
	} finally {
		if (loading && typeof loading.value === 'boolean')
			loading.value = false;
	}
}

async function deleteData({
	endPoint,
	message = `<span style="color:'red'">Hapus data ini?</span>`,
	rerender,
	params,
	loading,
	notify = true,
}) {
	const dialog = await notifyConfirm(message, true);
	return dialog
		? await deleteApi({ endPoint, loading, notify, rerender, params })
		: false;
}

export default deleteData;
