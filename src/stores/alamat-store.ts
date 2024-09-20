import { defineStore } from 'pinia';

interface Desa {
	id: string;
	desa: string;
}

interface Kecamatan {
	id: string;
	kecamatan: string;
	desa: Desa[];
}

interface Kabupaten {
	id: string;
	kabupaten: string;
	kecamatan: Kecamatan[];
}

interface Provinsi {
	id: string;
	provinsi: string;
	kabupaten: Kabupaten[];
}

interface AlamatState {
	provinsi: Provinsi[];
}

// const alamat = {
// 	provinsi: [
// 		{
// 			id: '1',
// 			provinsi: 'Bali',
// 			kabupaten:[
// 				{
// 					id:'12',
// 					kabupaten:'Denpasar',
// 					kecamatan:[
// 						{
// 							id:'1234',
// 							kecamatan:'Balebale',
// 							desa:[
// 								{
// 									id:'1233',
// 									desa:'Angsokah'
// 								}
// 							]

// 						}
// 					]
// 				}
// 			]
// 		},
// 	],
// };

export default defineStore('alamat', {
	state: (): AlamatState => {
		return {
			provinsi: [],
		};
	},

	getters: {},

	actions: {
		findProvinsi(provinsi: string): Provinsi | undefined {
			if (!provinsi) return;
			return this.provinsi.find(
				(prov) =>
					prov?.provinsi.toLowerCase() === provinsi.toLowerCase(),
			);
		},

		findKabupaten(
			provinsi: string,
			kabupaten: string,
		): Kabupaten | undefined {
			if (!provinsi || !kabupaten) return;
			const prov = this.findProvinsi(provinsi);
			if (prov && prov.kabupaten) {
				return prov.kabupaten.find(
					(kab) =>
						kab.kabupaten.toLowerCase() === kabupaten.toLowerCase(),
				);
			}
		},

		findKecamatan(
			provinsi: string,
			kabupaten: string,
			kecamatan: string,
		): Kecamatan | undefined {
			if (!provinsi || !kabupaten || !kecamatan) return;
			const kab = this.findKabupaten(provinsi, kabupaten);
			if (kab && kab.kecamatan) {
				return kab.kecamatan.find(
					(kec) =>
						kec.kecamatan.toLowerCase() === kecamatan.toLowerCase(),
				);
			}
		},

		setProvinsi(payload: Provinsi[]): void {
			this.provinsi = [];
			this.provinsi = payload;
		},

		setKabupaten(payload: Kabupaten[], provinsi: string): void {
			const pro = this.findProvinsi(provinsi);
			if (pro) {
				pro.kabupaten = payload;
			}
		},

		setKecamatan(
			payload: Kecamatan[],
			provinsi: string,
			kabupaten: string,
		): void {
			const kab = this.findKabupaten(provinsi, kabupaten);
			if (kab) {
				kab.kecamatan = payload;
			}
		},

		setDesa(
			payload: Desa[],
			provinsi: string,
			kabupaten: string,
			kecamatan: string,
		): void {
			const kec = this.findKecamatan(provinsi, kabupaten, kecamatan);
			if (kec) {
				kec.desa = payload;
			}
		},

		getProvinsiArr(): string[] {
			return this.provinsi
				.map((item) => item.provinsi)
				.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
		},

		getKabupatenArr(provinsi: string): string[] {
			const pro = this.findProvinsi(provinsi);
			return pro?.kabupaten
				? pro.kabupaten
						.map((item) => item.kabupaten)
						.sort((a, b) =>
							a.toLowerCase().localeCompare(b.toLowerCase()),
						)
				: [];
		},

		getKecamatanArr(provinsi: string, kabupaten: string): string[] {
			const kab = this.findKabupaten(provinsi, kabupaten);
			return kab?.kecamatan
				? kab.kecamatan
						.map((item) => item.kecamatan)
						.sort((a, b) =>
							a.toLowerCase().localeCompare(b.toLowerCase()),
						)
				: [];
		},

		getDesaArr(
			provinsi: string,
			kabupaten: string,
			kecamatan: string,
		): string[] {
			const kec = this.findKecamatan(provinsi, kabupaten, kecamatan);
			return kec?.desa
				? kec.desa
						.map((item) => item.desa)
						.sort((a, b) =>
							a.toLowerCase().localeCompare(b.toLowerCase()),
						)
				: [];
		},
	},

	persist: {
		storage: localStorage,
	},
});
