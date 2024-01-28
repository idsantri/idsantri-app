import { notifyConfirm } from 'src/utils/notify';
import { apiTokened } from '.';

async function apiDownload({ message = 'Download data yang dicetak?', url }) {
	const dialog = await notifyConfirm(message, true);
	if (!dialog) return false;

	let link = document.createElement('a');
	link.href = apiTokened.defaults.baseURL + url;
	link.click();
	link.remove();
	return true;
}
export default apiDownload;
