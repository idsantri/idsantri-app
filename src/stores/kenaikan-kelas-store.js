import { defineStore } from 'pinia';
import { notifyError } from 'src/utils/notify';

const init = {
	th_ajaran_h: '',
	tingkat_id: '',
	kelas: '',
};

export default defineStore('kenaikan-kelas', {
	state: () => {
		return {
			murid: [],
			oldDataFilter: JSON.parse(JSON.stringify(init)),
			newDataFilter: JSON.parse(JSON.stringify(init)),
		};
	},

	getters: {
		getMurid: (state) => state.murid,
	},

	actions: {
		resetMurid() {
			this.murid = [];
		},
		resetOldFilter() {
			this.oldDataFilter = JSON.parse(JSON.stringify(init));
		},
		resetNewFilter() {
			this.newDataFilter = JSON.parse(JSON.stringify(init));
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
					new_th_ajaran_h: '',
					new_tingkat_id: '',
					new_kelas: '',
					new_keterangan: '',
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
			const murid = this.murid[objIndex];
			murid.proses = true;
			murid.new_th_ajaran_h = this.newDataFilter.th_ajaran_h;
			murid.new_tingkat_id = this.newDataFilter.tingkat_id;
			murid.new_kelas = this.newDataFilter.kelas;
			murid.new_keterangan = '';
		},
		prosesFalse(kelasId) {
			const objIndex = this.murid.findIndex((obj) => obj.id === kelasId);
			const murid = this.murid[objIndex];
			murid.proses = false;
			murid.new_th_ajaran_h = '';
			murid.new_tingkat_id = '';
			murid.new_kelas = '';
			murid.new_keterangan = '';
		},
	},
	// persist: true,
});
