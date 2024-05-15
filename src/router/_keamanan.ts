export default [
	{
		path: '',
		redirect: () => '/keamanan/izin-pesantren',
	},
	{
		// /:id -> matches only numbers
		path: 'izin-pesantren/:id(\\d+)',
		component: () => import('src/pages/keamanan/perizinan/IzinDetail.vue'),
	},
	{
		path: 'izin-pesantren/:startDate?/:endDate?',
		component: () => import('src/pages/keamanan/perizinan/IndexPage.vue'),
	},
	{
		// /:id -> matches only numbers
		path: 'indisipliner/:id(\\d+)',
		component: () =>
			import('src/pages/keamanan/indisipliner/IndisiplinerDetail.vue'),
	},
	{
		path: 'indisipliner/:startDate?/:endDate?',
		component: () =>
			import('src/pages/keamanan/indisipliner/IndexPage.vue'),
	},
];
