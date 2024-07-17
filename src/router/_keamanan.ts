import { RouteLocation } from 'vue-router';

export default [
	{
		path: '',
		redirect: (to: RouteLocation) => `${to.fullPath}/izin-pesantren`,
	},

	// izin-pesantren
	{
		path: 'izin-pesantren/:startDate?/:endDate?',
		component: () =>
			import('src/pages/keamanan/perizinan/filter/IzinByDate.vue'),
	},
	{
		path: 'izin-pesantren/santri/:santri_id',
		component: () =>
			import('src/pages/keamanan/perizinan/IzinBySantri.vue'),
	},
	{
		// /:id -> matches only numbers
		path: 'izin-pesantren/:id(\\d+)',
		component: () => import('src/pages/keamanan/perizinan/IzinById.vue'),
	},

	// indisipliner
	{
		path: 'indisipliner/:startDate?/:endDate?',
		component: () =>
			import(
				'src/pages/keamanan/indisipliner/filter/IndisiplinerByDate.vue'
			),
	},
	{
		path: 'indisipliner/santri/:santri_id',
		component: () =>
			import('src/pages/keamanan/indisipliner/IndisiplinerBySantri.vue'),
	},
	{
		// /:id -> matches only numbers
		path: 'indisipliner/:id(\\d+)',
		component: () =>
			import('src/pages/keamanan/indisipliner/IndisiplinerById.vue'),
	},
];
