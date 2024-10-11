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
				path: ':th_ajaran_h?/:tingkat_id?/:kelas?',
				component: () =>
					import('src/pages/madrasah/murid/ContentTable.vue'),
			},
		],
	},
	{
		path: 'kelas/kenaikan',
		component: () =>
			import('src/pages/madrasah/kelas/kenaikan/KenaikanKelas.vue'),
	},

	{
		path: 'kelas/:id',
		component: () => import('src/pages/madrasah/kelas/KelasIndex.vue'),
		redirect: (to: RouteLocation) => `${to.fullPath}/riwayat`,
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
				path: 'nilai-mapel',
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
				path: ':th_ajaran_h?/:tingkat_id?',
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
				path: 'rerata/:th_ajaran_h?/:tingkat_id?/:kelas?',
				component: () =>
					import('src/pages/madrasah/nilai-mapel/NilaiIndex.vue'),
			},
			{
				path: 'upload',
				component: () =>
					import('src/pages/madrasah/nilai-mapel/UploadPage.vue'),
			},
			{
				path: 'download',
				component: () =>
					import('src/pages/madrasah/nilai-mapel/DownloadPage.vue'),
			},
		],
	},

	// madrasah/nilai-mapel
	{
		path: 'nilai-ahwal',
		children: [
			{
				path: ':th_ajaran_h?/:tingkat_id?/:kelas?/:ujian_ke?',
				component: () =>
					import('src/pages/madrasah/nilai-ahwal/IndexPage.vue'),
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
				/**
				 * @deprecated
				 */
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
				path: 'penomoran/:th_ajaran_h?/:tingkat_id?/:kelas?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiPenomoran.vue'),
				name: 'Atur Nomor Absen',
			},
			{
				path: 'input/:absensi/:th_ajaran_h?/:tingkat_id?/:kelas?/:set_bulan_ujian?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiInput.vue'),
				name: 'Input Data',
			},
			{
				path: 'rekap-ujian/:absensi/:th_ajaran_h?/:tingkat_id?/:kelas?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiRekapUjian.vue'),
				name: 'Rekap Ujian',
			},
			{
				path: 'laporan/:absensi/:th_ajaran_h?/:tingkat_id?/:list_bulan_ujian?',
				component: () =>
					import('src/pages/madrasah/absensi/AbsensiLaporan.vue'),
				name: 'Laporan',
			},
		],
	},
];
