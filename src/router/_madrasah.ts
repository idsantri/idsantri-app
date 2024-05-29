import { RouteLocation } from 'vue-router';

export default [
	{
		path: '',
		redirect: () => '/madrasah/murid',
	},
	{
		path: 'murid',
		component: () => import('src/pages/madrasah/murid/IndexPage.vue'),
		children: [
			{
				path: ':thAjaranH?/:tingkatId?/:kelas?',
				component: () =>
					import('src/pages/madrasah/murid/ContentTable.vue'),
			},
		],
	},

	{
		path: 'kelas/:id',
		component: () => import('src/pages/madrasah/kelas/KelasIndex.vue'),
		children: [
			{
				path: 'riwayat',
				component: () =>
					import('src/pages/madrasah/kelas/KelasRiwayat.vue'),
			},
			{
				path: 'izin',
				component: () =>
					import('src/pages/madrasah/kelas/KelasIzin.vue'),
			},
			{
				path: 'nilai',
				component: () =>
					import('src/pages/madrasah/kelas/KelasNilai.vue'),
			},
		],
	},

	{
		path: 'tingkat',
		component: () => import('src/pages/madrasah/tingkat/IndexTingkat.vue'),
		redirect: () => '/madrasah/tingkat/id-murid',
		children: [
			{
				path: 'id-murid',
				component: () =>
					import('src/pages/madrasah/tingkat/IDMurid.vue'),
				name: 'ID Murid',
			},
		],
	},

	{
		path: 'aparatur',
		component: () =>
			import('src/pages/madrasah/aparatur/AparaturIndex.vue'),
		children: [
			{
				path: ':thAjaranH/:tingkatId?',
				component: () =>
					import('src/pages/madrasah/aparatur/AparaturContent.vue'),
			},
		],
	},

	// madrasah/nilai-mapel
	{
		path: 'nilai-mapel',
		children: [
			{
				path: '',
				redirect: (path: RouteLocation) => `${path.fullPath}/rerata`,
			},
			{
				path: 'rerata/:thAjaranH?/:tingkatId?/:kelas?',
				component: () =>
					import('src/pages/madrasah/nilai-mapel/NilaiIndex.vue'),
			},
		],
	},

	// madrasah/mapel
	{
		path: 'mapel',
		component: () => import('src/pages/madrasah/mapel/MapelIndex.vue'),
	},

	{
		path: 'absensi',
		component: () => import('src/pages/madrasah/absensi/AbsensiIndex.vue'),
		children: [
			{
				path: 'print',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiPrint.vue'),
				name: 'Print',
			},
			{
				path: 'setting',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiSetting.vue'),
				name: 'Pengaturan Jadwal Ujian',
			},
			{
				path: 'penomoran/:thAjaranH?/:tingkatId?/:kelas?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiPenomoran.vue'),
				name: 'Atur Nomor Absen',
			},
			{
				path: ':absensi/input/:thAjaranH?/:tingkatId?/:kelas?/:bulanUjian?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiInput.vue'),
				name: 'Input Data',
			},
			{
				path: ':absensi/rekap-ujian/:thAjaranH?/:tingkatId?/:kelas?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiRekapUjian.vue'),
				name: 'Rekap Ujian',
			},
			{
				path: ':absensi/laporan/:thAjaranH?/:tingkatId?/:kelas?/:bulanUjian?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiLaporan.vue'),
				name: 'Laporan',
			},
		],
	},
];
