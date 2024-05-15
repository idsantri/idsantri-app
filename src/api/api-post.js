import api from '.';
import getToken from './get-token';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

async function apiPost({
	endPoint,
	data,
	rerender,
	needResponse = true,
	needNotify = true,
	loading,
}) {
	try {
		api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
		if (loading && typeof loading.value === 'boolean') loading.value = true;
		const response = await api.post(endPoint, data);
		if (needNotify) notifySuccess(response.data.message);
		if (needResponse) return response.data;
		if (rerender) forceRerender();
		return true;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(`Error during post ${endPoint}`, error);
		}
		return false;
	} finally {
		if (loading && typeof loading.value === 'boolean')
			loading.value = false;
	}
}

export default apiPost;
