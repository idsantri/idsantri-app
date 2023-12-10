import { apiTokened } from 'src/api';
import { watch } from 'vue';

async function fetchAlamat(
	request,
	{ lists, loading, provinsi, kabupaten, kecamatan }
) {
	// const { lists, loading, provinsi, kabupaten, kecamatan } = components;
	let url = '';

	if (request == 'provinsi') {
		url = `alamat/provinsi`;
	}

	if (request == 'kabupaten') {
		if (!provinsi.value) return;
		url = `alamat/kabupaten?provinsi=${provinsi.value}`;
	}

	if (request == 'kecamatan') {
		if (!provinsi.value || !kabupaten.value) return;
		url = `alamat/kecamatan?provinsi=${provinsi.value}&kabupaten=${kabupaten.value}`;
	}

	if (request == 'desa') {
		if (!provinsi.value || !kabupaten.value || !kecamatan.value) return;
		url = `alamat/desa?provinsi=${provinsi.value}&kabupaten=${kabupaten.value}&kecamatan=${kecamatan.value}`;
	}

	try {
		loading.value[request] = true;

		const response = await apiTokened.get(url);
		lists.value[request] = response.data[request];
	} catch (error) {
		console.log(`Not Found list ${request}`, error);
	} finally {
		loading.value[request] = false;
	}
}

async function watchAlamat({ provinsi, kabupaten, kecamatan, desa, lists }) {
	// const { provinsi, kabupaten, kecamatan, desa, lists } = components;
	watch(
		[provinsi, kabupaten, kecamatan],
		async (
			[newProvinsi, newKabupaten, newKecamatan],
			[oldProvinsi, oldKabupaten, oldKecamatan]
		) => {
			if (newProvinsi != oldProvinsi) {
				kabupaten.value = null;
				kecamatan.value = null;
				desa.value = null;

				lists.value['kabupaten'] = [];
				lists.value['kecamatan'] = [];
				lists.value['desa'] = [];

				await fetchAlamat('kabupaten', components);
			}
			if (newKabupaten != oldKabupaten) {
				kecamatan.value = null;
				desa.value = null;

				lists.value['kecamatan'] = [];
				lists.value['desa'] = [];

				await fetchAlamat('kecamatan', components);
			}
			if (newKecamatan != oldKecamatan) {
				desa.value = null;

				lists.value['desa'] = [];

				await fetchAlamat('desa', components);
			}
		}
	);
}

export { fetchAlamat, watchAlamat };
