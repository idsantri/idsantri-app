import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';

async function getData({ endPoint, spinner, isError }) {
	try {
		if (spinner && typeof spinner.value === 'boolean') spinner.value = true;
		const { data } = await apiTokened.get(`${endPoint}`);
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
		if (spinner && typeof spinner.value === 'boolean')
			spinner.value = false;
	}
}

export default getData;
