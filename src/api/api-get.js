import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { notifyError, notifySuccess } from 'src/utils/notify';

async function getData({ endPoint, loading, isError, params, notify = false }) {
	try {
		if (loading && typeof loading.value === 'boolean') loading.value = true;
		const { data } = await apiTokened.get(endPoint, { params });
		if (notify) notifySuccess(data.message);
		return data;
	} catch (error) {
		if (isError && typeof isError.value === 'boolean') isError.value = true;
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
}

export default getData;
