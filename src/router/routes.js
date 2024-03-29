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
			// cari
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

			//santri -> redirect
			{
				path: 'santri',
				redirect: 'cari/santri',
				// component: () => import('src/pages/search/SantriSearch.vue'),
				// meta: { title: 'Cari Santri' },
			},

			//santri
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
					// {
					// 	path: 'iuran',
					// 	meta: { title: 'Detail Santri — Iuran' },
					// 	component: () =>
					// 		import('src/pages/santri/iuran/SantriIuran.vue'),
					// 	children: [
					// 		{
					// 			path: ':th_ajaran_h',
					// 			component: () =>
					// 				import(
					// 					'src/pages/santri/iuran/SantriIuranTh.vue'
					// 				),
					// 		},
					// 	],
					// },
				],
			},

			//wali -> redirect
			{
				path: 'wali',
				redirect: 'cari/wali',
				// component: () => import('src/pages/search/WaliSearch.vue'),
				// meta: { title: 'Cari Wali' },
			},

			//wali
			{
				path: 'wali/:id',
				component: () => import('src/pages/wali/WaliDetail.vue'),
				meta: { title: 'Detail Wali' },
			},

			// ortu -> redirect
			{
				path: 'ortu',
				redirect: 'cari/ortu',
				// component: () => import('src/pages/search/OrtuSearch.vue'),
				// meta: { title: 'Cari Orang Tua' },
			},

			//ortu
			{
				path: 'ortu/:id',
				component: () => import('src/pages/ortu/OrtuDetail.vue'),
				meta: { title: 'Detail Orang Tua' },
			},

			//home
			{
				path: 'home',
				component: () => import('src/pages/home/HomeIndex.vue'),
				meta: { title: 'Home' },
			},

			//sekretariat
			{
				path: 'sekretariat',
				component: () => import('src/pages/sekretariat/IndexPage.vue'),
				meta: { title: 'Sekretariat' },
			},

			//madrasah
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
								path: 'izin',
								component: () =>
									import(
										'src/pages/madrasah/kelas/KelasIzin.vue'
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
						path: ':absensi',
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
								path: 'print',
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

			//bendahara
			{
				path: 'bendahara',
				meta: { title: 'Bendahara' },
				redirect: (to) => '/bendahara/iuran/q/tanggal',
				children: [
					{
						path: 'iuran/santri/:id/:thAjaranH?',
						component: () =>
							import(
								'src/pages/bendahara/iuran/santri/IuranSantri.vue'
							),
					},
					{
						path: 'iuran/q',
						children: [
							{
								path: 'th-ajaran/:thAjaranH?',
								component: () =>
									import(
										'src/pages/bendahara/iuran/filter/IuranByThAjaran.vue'
									),
							},
							{
								path: 'santri/:id?',
								component: () =>
									import(
										'src/pages/bendahara/iuran/filter/IuranBySantri.vue'
									),
							},
							{
								path: 'tanggal/:startDate?/:endDate?',
								component: () =>
									import(
										'src/pages/bendahara/iuran/filter/IuranByTanggal.vue'
									),
							},
						],
					},
				],
			},

			//keamanan
			{
				path: 'keamanan',
				meta: { title: 'Keamanan' },
				redirect: (to) => '/keamanan/izin-pesantren',
				children: [
					{
						// /:id -> matches only numbers
						path: 'izin-pesantren/:id(\\d+)',
						component: () =>
							import(
								'src/pages/keamanan/perizinan/IzinDetail.vue'
							),
					},
					{
						path: 'izin-pesantren/:startDate?/:endDate?',
						component: () =>
							import(
								'src/pages/keamanan/perizinan/IndexPage.vue'
							),
					},

					{
						// /:id -> matches only numbers
						path: 'indisipliner/:id(\\d+)',
						component: () =>
							import(
								'src/pages/keamanan/indisipliner/IndisiplinerDetail.vue'
							),
					},
					{
						path: 'indisipliner/:startDate?/:endDate?',
						component: () =>
							import(
								'src/pages/keamanan/indisipliner/IndexPage.vue'
							),
					},
				],
			},

			//personalia
			{
				path: 'personalia',
				meta: { title: 'Pesonalia' },
				children: [
					{
						path: '',
						component: () =>
							import(
								'src/pages/personalia/PersonaliaIndexTable.vue'
							),
					},
					{
						path: ':id',
						component: () =>
							import('src/pages/personalia/PersonaliaDetail.vue'),
						meta: { title: 'Pesonalia Detail' },
					},
				],
			},

			//ugt
			{
				path: 'ugt',
				redirect: (to) => '/ugt/pjgt',
				meta: { title: 'UGT' },
				children: [
					{
						path: 'pjgt',
						component: () =>
							import('src/pages/ugt/pjgt/PjgtIndex.vue'),
					},
					{
						path: 'pjgt/:id',
						component: () =>
							import('src/pages/ugt/pjgt/PjgtDetail.vue'),
					},
					{
						path: 'gt',
						component: () => import('src/pages/ugt/gt/GtIndex.vue'),
					},
					{
						path: 'gt/:id',
						component: () =>
							import('src/pages/ugt/gt/GtDetail.vue'),
					},
					{
						path: 'kas',
						component: () =>
							import('src/pages/ugt/kas/KasIndex.vue'),
					},
				],
			},

			//settings
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

			//profile
			{
				path: 'profile',
				component: () => import('src/pages/profile/ProfileIndex.vue'),
				meta: { title: 'User Profile' },
			},

			//test
			{
				path: 'test',
				component: () => import('src/pages/testPage.vue'),
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
