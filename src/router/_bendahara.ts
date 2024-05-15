export default [
	{
		path: '',
		redirect: () => '/bendahara/iuran/q/tanggal',
	},
	{
		path: 'iuran/export',
		component: () =>
			import('src/pages/bendahara/iuran/export/ExportIndex.vue'),
	},
	{
		path: 'iuran/santri/:id/:thAjaranH?',
		component: () =>
			import('src/pages/bendahara/iuran/santri/IuranSantri.vue'),
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
];
