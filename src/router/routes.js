import { defineAsyncComponent } from 'vue';

function page(filename) {
	return defineAsyncComponent(() => import('src/pages/' + filename + '.vue'));
}

const routes = [
	{
		path: '/',
		name: 'Auth',
		component: () => import('layouts/AuthLayout.vue'),
		children: [
			{
				path: '/logout',
				name: 'Logout',
				component: () => import('../pages/auth/LogoutPage.vue'),
				meta: { title: 'Logout' },
			},
			{
				path: 'verify',
				name: 'Verify',
				component: () => import('../pages/auth/VerifyPage.vue'),
				meta: { title: 'Verifikasi Email' },
			},
			{
				path: 'register',
				name: 'Register',
				component: () => import('../pages/auth/RegisterPage.vue'),
				meta: { title: 'Registrasi' },
			},
			{
				path: 'login',
				name: 'Login',
				component: () => import('../pages/auth/LoginPage.vue'),
				meta: { title: 'Login' },
			},
			{
				path: 'forgot-password',
				name: 'Forgot',
				component: () => import('../pages/auth/ForgotPage.vue'),
				meta: { title: 'Lupa Password' },
			},
			{
				path: 'reset-password',
				name: 'Reset',
				component: () => import('../pages/auth/ResetPage.vue'),
				meta: { title: 'Ganti Password' },
			},
		],
	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: 'cari',
				component: () => import('src/pages/search/IndexSearch.vue'),
				meta: { title: 'Cari' },
				children: [
					{
						path: '',
						redirect: (to) => to.fullPath + '/santri',
					},
					{
						path: 'santri',
						component: () =>
							import('src/pages/search/SantriSearch.vue'),
					},
					{
						path: 'wali',
						component: () =>
							import('src/pages/search/WaliSearch.vue'),
					},
					{
						path: 'ortu',
						component: () =>
							import('src/pages/search/OrtuSearch.vue'),
					},
				],
			},
			{
				path: 'santri',
				redirect: 'cari/santri',
				// component: () => import('src/pages/search/SantriSearch.vue'),
				// meta: { title: 'Cari Santri' },
			},
			{
				path: 'santri/:id',
				component: () => import('src/pages/santri/SantriDetail.vue'),
				meta: { title: 'Detail Santri' },
				children: [
					{
						path: '',
						redirect: (to) => to.fullPath + '/kelas',
					},
					{
						path: 'status',
						component: () =>
							import(
								'src/pages/santri/relations/status/SantriStatus.vue'
							),
					},

					{
						path: 'kelas',
						component: () =>
							import(
								'src/pages/santri/relations/kelas/SantriKelas.vue'
							),
					},
					{
						path: 'domisili',
						component: () =>
							import(
								'src/pages/santri/relations/domisili/SantriDomisili.vue'
							),
					},
					{
						path: 'wali',
						component: () =>
							import(
								'src/pages/santri/relations/wali/SantriWali.vue'
							),
					},
					{
						path: 'ortu',
						component: () =>
							import(
								'src/pages/santri/relations/ortu/SantriOrtu.vue'
							),
					},
					{
						path: 'iuran-total',
						component: () =>
							import(
								'src/pages/santri/relations/iuran-total/SantriIuranTotal.vue'
							),
					},
					{
						path: 'iuran',
						meta: { title: 'Detail Santri — Iuran' },
						component: () =>
							import('src/pages/santri/iuran/SantriIuran.vue'),
						children: [
							{
								path: ':th_ajaran_h',
								component: () =>
									import(
										'src/pages/santri/iuran/SantriIuranTh.vue'
									),
							},
						],
					},
				],
			},
			{
				path: 'wali',
				redirect: 'cari/wali',
				// component: () => import('src/pages/search/WaliSearch.vue'),
				// meta: { title: 'Cari Wali' },
			},
			{
				path: 'wali/:id',
				component: () => import('src/pages/wali/WaliDetail.vue'),
				meta: { title: 'Detail Wali' },
			},
			{
				path: 'ortu',
				redirect: 'cari/ortu',
				// component: () => import('src/pages/search/OrtuSearch.vue'),
				// meta: { title: 'Cari Orang Tua' },
			},
			{
				path: 'ortu/:id',
				component: () => import('src/pages/ortu/OrtuDetail.vue'),
				meta: { title: 'Detail Orang Tua' },
			},

			{
				path: 'home',
				component: () => import('src/pages/home/HomeIndex.vue'),
				meta: { title: 'Home' },
			},
			{
				path: 'sekretariat',
				component: () => import('src/pages/sekretariat/IndexPage.vue'),
				meta: { title: 'Sekretariat' },
			},
			{
				path: 'madrasah',
				meta: { title: 'Madrasah' },
				redirect: (to) => '/madrasah/murid',
				children: [
					{
						path: 'murid',
						component: () =>
							import('src/pages/madrasah/murid/IndexPage.vue'),
						children: [
							{
								path: ':thAjaranH?/:tingkatId?/:kelas?',
								component: () =>
									import(
										'src/pages/madrasah/murid/ContentTable.vue'
									),
							},
						],
					},
					{
						path: 'kelas/:id',
						component: () =>
							import('src/pages/madrasah/kelas/KelasIndex.vue'),
						children: [
							{
								path: 'riwayat',
								component: () =>
									import(
										'src/pages/madrasah/kelas/KelasRiwayat.vue'
									),
							},
							{
								path: 'nilai',
								component: () =>
									import(
										'src/pages/madrasah/kelas/KelasNilai.vue'
									),
							},
						],
					},
					{
						path: 'absensi',
						component: () =>
							import(
								'src/pages/madrasah/absensi/AbsensiIndex.vue'
							),
						children: [
							{
								path: 'input/:thAjaranH?/:tingkatId?/:kelas?/:bulanUjian?',
								component: () =>
									import(
										'src/pages/madrasah/absensi/AbsensiInput.vue'
									),
								name: 'Input Data',
							},
							{
								path: 'rekap-ujian/:thAjaranH?/:tingkatId?/:kelas?',
								component: () =>
									import(
										'src/pages/madrasah/absensi/AbsensiRekapUjian.vue'
									),
								name: 'Rekap Ujian',
							},
							{
								path: 'print/:thAjaranH?/:tingkatId?/:kelas?',
								component: () =>
									import(
										'src/pages/madrasah/absensi/AbsensiPrint.vue'
									),
								name: 'Print',
							},
							{
								path: 'setting',
								component: () =>
									import(
										'src/pages/madrasah/absensi/AbsensiSetting.vue'
									),
								name: 'Pengaturan Jadwal Ujian',
							},
							{
								path: 'penomoran/:thAjaranH?/:tingkatId?/:kelas?',
								component: () =>
									import(
										'src/pages/madrasah/absensi/AbsensiPenomoran.vue'
									),
								name: 'Atur Nomor Absen',
							},
						],
					},
					{
						path: 'tingkat',
						component: () =>
							import(
								'src/pages/madrasah/tingkat/IndexTingkat.vue'
							),
						redirect: (to) => '/madrasah/tingkat/id-murid',
						children: [
							{
								path: 'id-murid',
								component: () =>
									import(
										'src/pages/madrasah/tingkat/IDMurid.vue'
									),
								name: 'ID Murid',
							},
						],
					},
					{
						path: 'aparatur',
						component: () =>
							import(
								'src/pages/madrasah/aparatur/AparaturIndex.vue'
							),
						children: [
							{
								path: ':thAjaranH/:tingkatId?',
								component: () =>
									import(
										'src/pages/madrasah/aparatur/AparaturContent.vue'
									),
							},
						],
					},
				],
			},
			{
				path: 'personalia',
				component: () =>
					import('src/pages/personalia/PersonaliaTable.vue'),
				meta: { title: 'Pesonalia' },
			},
			{
				path: 'personalia/:id',
				component: () =>
					import('src/pages/personalia/PersonaliaDetail.vue'),
				meta: { title: 'Pesonalia Detail' },
			},

			{
				path: 'settings',
				children: [
					{
						path: 'lists',
						component: () =>
							import('src/pages/settings/lists/ListsIndex.vue'),
						meta: { title: 'Setting: List' },
						children: [
							{
								path: ':listKey',
								component: () =>
									import(
										'src/pages/settings/lists/ListsContainer.vue'
									),
							},
						],
					},
					{
						path: 'users',
						component: () =>
							import('src/pages/settings/users/UserPage.vue'),
						meta: { title: 'Setting: User' },
					},
				],
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/pages/errors/ErrorNotFound.vue'),
	},
];

export default routes;
