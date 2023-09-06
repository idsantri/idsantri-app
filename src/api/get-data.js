import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';

async function getData({ endPoint, spinner }) {
	try {
		if (spinner && typeof spinner.value === 'boolean') spinner.value = true;
		const { data } = await apiTokened.get(`${endPoint}`);
		return data;
	} catch (error) {
		toArray(error.response?.data?.message).forEach((message) => {
			notifyError(message);
		});
	} finally {
		if (spinner && typeof spinner.value === 'boolean')
			spinner.value = false;
	}
}

export default getData;
