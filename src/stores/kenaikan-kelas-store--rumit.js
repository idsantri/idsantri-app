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
			th_ajaran: [],
			murid: [],
			oldDataFilter: JSON.parse(JSON.stringify(init)),
			newDataFilter: JSON.parse(JSON.stringify(init)),
		};
	},

	getters: {
		getTahunAjaran: function (state) {
			return state.th_ajaran.map((th) => {
				return {
					th_ajaran_h: th.th_ajaran_h,
					th_ajaran_m: th.th_ajaran_m,
				};
			});
		},

		getMurid: (state) => state.murid,
	},

	actions: {
		// new
		postData(payload) {
			this.th_ajaran = payload;
		},
		getMuridByTahun(th_ajaran_h) {
			const th = this.th_ajaran.find((th) => {
				return th.th_ajaran_h == th_ajaran_h;
			});
			// console.log('s', th);
			return th?.murid ?? [];
		},

		groupByTingkat(murid) {
			const groupedData = {};
			const tingkat_id = 'tingkat_id';
			const tingkat = 'tingkat';
			for (const item of murid) {
				const key = `${item[tingkat_id]}_${item[tingkat]}`;
				if (!groupedData[key]) {
					groupedData[key] = {
						[tingkat_id]: item[tingkat_id],
						[tingkat]: item[tingkat],
					};
				}
			}
			return Object.values(groupedData);
		},

		getTingkatByTahun(th_ajaran_h) {
			const murid = this.getMuridByTahun(th_ajaran_h);
			return this.groupByTingkat(murid, 'tingkat_id', 'tingkat');
		},
		groupByKelas(data, tingkat_id) {
			const groupedData = {};
			// console.log('g', tingkat_id);
			for (const item of data) {
				if (item.tingkat_id == tingkat_id) {
					const kelas = item.kelas;
					if (!groupedData[kelas]) {
						groupedData[kelas] = true;
					}
				}
			}

			return Object.keys(groupedData);
		},
		getKelasByTahunAndTingkat(th_ajaran_h, tingkat_id) {
			const murid = this.getMuridByTahun(th_ajaran_h);
			const result = this.groupByKelas(murid, tingkat_id);
			// console.log('r', result);
			return result;
		},

		addMuridToTahun(payload, th_ajaran_h) {
			this.th_ajaran.forEach((th) => {
				if (th.th_ajaran_h == th_ajaran_h) {
					th.murid = [];
					th.murid = payload.map((i) => {
						return {
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
						};
					});
				}
			});
		},

		showMuridUnprocessed(th_ajaran_h, tingkat_id, kelas) {
			const murid = this.getMuridByTahun(th_ajaran_h);
			return murid.filter(
				(item) =>
					item.tingkat_id === tingkat_id &&
					item.kelas === kelas &&
					item.proses == false,
			);
		},

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
	// temp
	persist: false,
});
