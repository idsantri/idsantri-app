import { defineStore } from 'pinia';
import { notifyError } from 'src/utils/notify';
export default defineStore('kenaikan-kelas', {
	state: () => {
		return {
			murid: [],
			oldDataFilter: {
				th_ajaran_h: '',
				tingkat_id: '',
				kelas: '',
			},
			newDataFilter: {
				th_ajaran_h: '',
				tingkat_id: '',
				kelas: '',
			},
		};
	},

	getters: {
		getMurid: (state) => state.murid,
	},

	actions: {
		resetMurid() {
			this.murid = [];
		},
		resetNewFilter() {
			this.newDataFilter = {
				th_ajaran_h: '',
				tingkat_id: '',
				kelas: '',
			};
		},
		addMurid(payload) {
			this.resetMurid();
			payload.forEach((element) => {
				this.murid.push({
					id: element.id,
					santri_id: element.santri_id,
					no_absen: element.no_absen,
					nama: element.nama,
					domisili: element.domisili,
					proses: false,
				});
			});
		},
		addNewDataFilter(payload) {
			this.newDataFilter = payload;
		},
		addOldDataFilter(payload) {
			this.oldDataFilter = payload;
		},
		getMuridFalse() {
			return this.murid.filter((m) => m.proses == false);
		},
		getMuridTrue() {
			return this.murid.filter((m) => m.proses == true);
		},
		prosesTrue(kelasId) {
			if (!this.newDataFilter.th_ajaran_h) {
				return notifyError('Tentukan tahun ajaran baru');
			}
			if (!this.newDataFilter.tingkat_id) {
				return notifyError('Tentukan tingkat pendidikan baru');
			}
			if (!this.newDataFilter.kelas) {
				return notifyError('Tentukan kelas baru');
			}
			const objIndex = this.murid.findIndex((obj) => obj.id === kelasId);
			// console.log(this.newDataFilter);
			this.murid[objIndex].proses = true;
			this.murid[objIndex].newTahun = this.newDataFilter.th_ajaran_h;
			this.murid[objIndex].newTingkat = this.newDataFilter.tingkat_id;
			this.murid[objIndex].newKelas = this.newDataFilter.kelas;
		},
		prosesFalse(kelasId) {
			const objIndex = this.murid.findIndex((obj) => obj.id === kelasId);
			this.murid[objIndex].proses = false;
			delete this.murid[objIndex].newTahun;
			delete this.murid[objIndex].newTingkat;
			delete this.murid[objIndex].newKelas;
		},
	},
	// persist: true,
});
