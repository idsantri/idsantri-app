import { defineStore } from 'pinia';
import listData from 'src/pages/settings/lists/lists-data';

function organizeData(data) {
	const organizedData = {};
	data.forEach((item) => {
		organizedData[item.url] = [];
	});

	return organizedData;
}

export default defineStore('lists-input', {
	state: () => {
		return organizeData(listData);
		// return {
		// 	domisili: [],
		// 	'hubungan-wali': [],
		// 	'jabatan-madrasiyah': [],
		// 	kelas: [],
		// 	'keterangan-iuran': [],
		// 	'keterangan-izin': [],
		// 	'keterangan-status': [],
		// 	'metode-pembayaran': [],
		// 	pekerjaan: [],
		// 	'jenis-lembaga-pendidikan': [],
		// 	'wilayah-ugt': [],
		// 	'pendidikan-akhir-diniyah': [],
		// 	'pendidikan-akhir-formal': [],
		// 	'takzir-santri': [],
		// 	status: [],
		// 	'sifat-izin': [],
		// 	'keperluan-izin': [],
		// 	'tatib-santri': [],
		// 	'tahun-ajaran': [],
		// 	iuran: [],
		// 	'tingkat-pendidikan': [],
		// };
	},

	getters: {},

	actions: {
		checkState(stateName) {
			// Check if the state property exists
			if (this.$state.hasOwnProperty(stateName)) {
				// Property exists
				return true;
			} else {
				// Property doesn't exist
				return false;
			}
		},
		getByStateName(stateName) {
			return this[stateName];
		},
		getByStateName_arr(stateName) {
			return this[stateName].map((v) => v.val0);
		},
	},

	persist: {
		storage: localStorage,
	},
});
