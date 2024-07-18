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
				catatan: '',
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
			payload.forEach((i) => {
				this.murid.push({
					id: i.id,
					santri_id: i.santri_id,
					th_ajaran_h: i.th_ajaran_h,
					tingkat_id: i.tingkat_id,
					tingkat: i.tingkat,
					kelas: i.kelas,
					no_absen: i.no_absen,
					nama: i.nama,
					domisili: i.domisili,
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
			this.murid[objIndex].new_th_ajaran_h =
				this.newDataFilter.th_ajaran_h;
			this.murid[objIndex].new_tingkat_id = this.newDataFilter.tingkat_id;
			this.murid[objIndex].new_kelas = this.newDataFilter.kelas;
			this.murid[objIndex].new_keterangan = null;
		},
		prosesFalse(kelasId) {
			const objIndex = this.murid.findIndex((obj) => obj.id === kelasId);
			this.murid[objIndex].proses = false;
			delete this.murid[objIndex].new_th_ajaran_h;
			delete this.murid[objIndex].new_tingkat_id;
			delete this.murid[objIndex].new_kelas;
			delete this.murid[objIndex].new_keterangan;
		},
	},
	// persist: true,
});
