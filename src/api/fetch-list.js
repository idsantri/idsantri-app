import { apiTokened } from 'src/api';

async function fetchLists(request) {
	const { loading, lists, key } = request;
	const url = `lists/${key}`;
	// console.log("url", url);
	loading.value[key] = true;
	try {
		const { data } = await apiTokened.get(url);
		lists.value[key] = data.lists;
	} catch (error) {
		console.log(`Not Found list: ${key}`, error);
	} finally {
		loading.value[key] = false;
	}
}

async function fetchListKey(request) {
	const { key, loading, lists, ascending } = request;
	loading.value[key] = true;
	let keyReplace = key.replace(/-/g, '_');
	try {
		const { data } = await apiTokened.get(`lists/${key}`);
		const listData = data[keyReplace];
		if (ascending) {
			listData.sort((a, b) => {
				if (a.val0 < b.val0) {
					return -1;
				}
			});
		} else {
			listData.sort((a, b) => {
				if (a.val0 > b.val0) {
					return -1;
				}
			});
		}
		lists.value[key] = listData;
		// console.log(lists.value[key]);
	} catch (error) {
		console.log(`Not Found list: ${key} `, error);
	} finally {
		loading.value[key] = false;
	}
}
export { fetchLists, fetchListKey };
