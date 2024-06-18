import api from '.';
import getToken from './get-token';
import { toArray } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';

/**
 * @param {*} object
 * @returns array
 */
async function getLists({ loading, lists, key, sort = null, url = '' }) {
	api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
	loading.value[key] = true;
	const endPoint = url?.length ? url : `lists/${key}`;
	try {
		const { data } = await api.get(endPoint);
		let result = data.lists;
		// abaikan huruf besar dan kecil
		if (sort === 'asc' || sort === true) {
			result.sort((a, b) =>
				a.localeCompare(b, undefined, { sensitivity: 'base' }),
			);
		} else if (sort === 'desc' || sort === false) {
			result.sort((a, b) =>
				b.localeCompare(a, undefined, { sensitivity: 'base' }),
			);
		}

		if (lists) {
			lists.value[key] = result;
		}
		return result;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(`Not Found lists: ${key} `, error);
		}
		return false;
	} finally {
		loading.value[key] = false;
	}
}

/**
 * @param {*} object
 * @returns array object
 */
async function getListsKey({ loading, lists, key, sort = null, url = '' }) {
	api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
	loading.value[key] = true;
	const endPoint = url?.length ? url : `lists/${key}`;
	const snakeCase = key.replace(/-/g, '_');
	try {
		const { data } = await api.get(endPoint);
		let result = data[snakeCase];
		if (sort === 'asc' || sort === true) {
			result.sort((a, b) => {
				return a.val0.localeCompare(b.val0, undefined, {
					sensitivity: 'base',
				});
			});
		} else if (sort === 'desc' || sort === false) {
			result.sort((a, b) => {
				return b.val0.localeCompare(a.val0, undefined, {
					sensitivity: 'base',
				});
			});
		}

		if (lists) {
			lists.value[key] = result;
		}
		return result;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(`Not Found lists: ${key} `, error);
		}
		return false;
	} finally {
		loading.value[key] = false;
	}
}

function hasObject(array) {
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'object') {
			return true;
		}
	}
	return false;
}

/**
 * @param {*} object
 * @returns array object
 */
async function getListsCustom({
	loading,
	lists,
	key,
	url,
	params,
	sort = null,
}) {
	api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
	loading.value[key] = true;
	try {
		const { data } = await api.get(url, { params });
		// lists.value[key] = data[key];
		let result = data[key].filter((el) => el != null);
		if (!hasObject(result)) {
			if (sort === 'asc' || sort === true) {
				result.sort((a, b) =>
					a.localeCompare(b, undefined, { sensitivity: 'base' }),
				);
			} else if (sort === 'desc' || sort === false) {
				result.sort((a, b) =>
					b.localeCompare(a, undefined, { sensitivity: 'base' }),
				);
			}
		}
		if (lists) {
			lists.value[key] = result;
		}
		return result;
	} catch (error) {
		const message = error?.response?.data?.message;
		if (message) {
			toArray(message).forEach((msg) => notifyError(msg));
		} else {
			console.log(`Not Found lists: ${key} `, error);
		}
		return false;
	} finally {
		loading.value[key] = false;
	}
}

export { getLists, getListsKey, getListsCustom };
