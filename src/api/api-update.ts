import api from '.';
import getToken from './get-token';
import apiError from './api-error';
import { UpdateParams } from './api-interface';
import { notifySuccess, notifyConfirm } from 'src/utils/notify';

async function apiUpdate({
	endPoint,
	data,
	confirm = true,
	message = 'Update data ini?',
	loading,
	notify = true,
	params,
}: UpdateParams): Promise<object | false> {
	if (confirm) {
		const isConfirmed = await notifyConfirm(message, true);
		if (!isConfirmed) {
			return false;
		}
	}
	try {
		api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
		if (loading && typeof loading.value === 'boolean') loading.value = true;
		const response = await api.put(endPoint, data, { params });
		if (notify) notifySuccess(response.data.message);
		return response.data;
	} catch (error) {
		apiError(error);
		return false;
	} finally {
		if (loading && typeof loading.value === 'boolean')
			loading.value = false;
	}
}

export default apiUpdate;
