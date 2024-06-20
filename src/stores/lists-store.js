import { defineStore } from 'pinia';
export default defineStore('lists-input', {
	state: () => {
		return {
			domisili: [],
			hubunganWali: [],
			jabatanMadrasiyah: [],
			kelas: [],
			keteranganIuran: [],
			keteranganIzin: [],
			keteranganStatus: [],
			metodePembayaran: [],
			pekerjaan: [],
			jenisLembagaPendidikan: [],
			wilayahUgt: [],
			pa_Diniyah: [],
			pa_Formal: [],
			takzirSantri: [],
			status: [],
			sifatIzin: [],
			keperluanIzin: [],
			tatibSantri: [],
			tahunAjaran: [],
			iuran: [],

			tingkatPendidikan: [],
		};
	},

	getters: {},

	actions: {
		setData(val, payload) {
			this[val] = payload;
		},
		iuranGet() {
			return this.iuran;
		},
		iuranSet(payload) {
			this.iuran = payload;
		},

		metodePembayaranGet() {
			return this.metodePembayaran;
		},
		metodePembayaranSet(payload) {
			this.metodePembayaran = payload;
		},

		keteranganIuranGet() {
			return this.keteranganIuran;
		},
		keteranganIuranSet(payload) {
			this.keteranganIuran = payload;
		},

		tatibSantriGetArray() {
			const tatib = this.tatibSantri;
			let result = [];
			if (tatib.length) {
				result = tatib
					.filter((d) => d.val0.length != 1)
					.map((d) => `[${d.val0}] ${d.val1}`);
			}
			return result;
		},
		tatibSantriSet(payload) {
			this.tatibSantri = payload;
		},

		takzirSantriGet() {
			return this.takzirSantri;
		},
		takzirSantriSet(payload) {
			this.takzirSantri = payload;
		},

		sifatIzinGet() {
			return this.sifatIzin;
		},
		sifatIzinSet(payload) {
			this.sifatIzin = payload;
		},

		keperluanIzinGet() {
			return this.keperluanIzin;
		},
		keperluanIzinSet(payload) {
			this.keperluanIzin = payload;
		},

		keteranganIzinGet() {
			return this.keteranganIzin;
		},
		keteranganIzinSet(payload) {
			this.keteranganIzin = payload;
		},

		tahunAjaranGet() {
			return this.tahunAjaran;
		},
		tahunAjaranSet(payload) {
			this.tahunAjaran = payload;
		},

		tingkatPendidikanGet() {
			return this.tingkatPendidikan;
		},
		tingkatPendidikanSet(payload) {
			this.tingkatPendidikan = payload;
		},

		kelasGet() {
			return this.kelas;
		},
		kelasSet(payload) {
			this.kelas = payload;
		},

		domisiliGet() {
			return this.domisili;
		},
		domisiliSet(payload) {
			this.domisili = payload;
		},

		statusGet() {
			return this.status;
		},
		statusSet(payload) {
			this.status = payload;
		},

		keteranganStatusGet() {
			return this.keteranganStatus;
		},
		keteranganStatusSet(payload) {
			this.keteranganStatus = payload;
		},

		hubunganWaliGet() {
			return this.hubunganWali;
		},
		hubunganWaliSet(payload) {
			this.hubunganWali = payload;
		},

		pa_DiniyahGet() {
			return this.pa_Diniyah;
		},
		pa_DiniyahSet(payload) {
			this.pa_Diniyah = payload;
		},

		pa_FormalGet() {
			return this.pa_Formal;
		},
		pa_FormalSet(payload) {
			this.pa_Formal = payload;
		},

		pekerjaanGet() {
			return this.pekerjaan;
		},
		pekerjaanSet(payload) {
			this.pekerjaan = payload;
		},

		jenisLembagaPendidikanGet() {
			return this.jenisLembagaPendidikan;
		},
		jenisLembagaPendidikanSet(payload) {
			this.jenisLembagaPendidikan = payload;
		},

		wilayahUgtGet() {
			return this.wilayahUgt;
		},
		wilayahUgtSet(payload) {
			this.wilayahUgt = payload;
		},

		jabatanMadrasiyahGet() {
			return this.jabatanMadrasiyah;
		},
		jabatanMadrasiyahSet(payload) {
			this.jabatanMadrasiyah = payload;
		},
	},

	persist: {
		storage: localStorage,
	},
});
