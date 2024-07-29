import { defineStore } from 'pinia';
import { notifyError } from 'src/utils/notify';

export default defineStore('mutasi-domisili', {
	state: () => {
		return {
			santri: [],
			newFilter: { domisili: '' },
		};
	},

	getters: {
		getSantri: (state) => state.santri,
	},

	actions: {
		resetSantri() {
			this.santri = [];
		},
		addSantri(payload) {
			this.resetSantri();
			payload.forEach((i) => {
				this.santri.push({
					id: i.id,
					santri_id: i.id,
					nama: i.nama,
					domisili: i.domisili,
					tingkat_id: i.tingkat_id,
					tingkat: i.tingkat,
					kelas: i.kelas,
					new_domisili: '',
					new_keterangan: '',
					proses: false,
				});
			});
		},

		getProsesTrue() {
			return this.santri.filter((m) => m.proses == true);
		},

		getProsesFalse() {
			return this.santri.filter((m) => m.proses == false);
		},

		prosesTrue(id) {
			if (!this.newFilter.domisili) {
				return notifyError('Tentukan domisili baru');
			}
			const objIndex = this.santri.findIndex((obj) => obj.id === id);
			const santri = this.santri[objIndex];
			santri.proses = true;
			santri.new_domisili = this.newFilter.domisili;
			santri.new_keterangan = 'Mutasi Domisili';
		},

		prosesFalse(id) {
			const objIndex = this.santri.findIndex((obj) => obj.id === id);
			const santri = this.santri[objIndex];
			santri.proses = false;
			santri.new_domisili = null;
			santri.new_keterangan = null;
		},

		deleteTrueProses() {
			const store = [];

			this.santri.forEach((item) => {
				if (!item.proses) {
					store.push(item);
				}
			});
			this.santri = store;
		},
	},
	persist: true,
});
