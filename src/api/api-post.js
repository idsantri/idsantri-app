import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { forceRerender } from 'src/utils/buttons-click';
import { notifyError, notifySuccess } from 'src/utils/notify';

function postData({ endPoint, data, rerender }) {
	return new Promise(async (resolve) => {
		try {
			const response = await apiTokened.post(endPoint, data);
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
	});
}

export default postData;
