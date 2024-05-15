export default [
	{
		path: '',
		redirect: () => '/ugt/pjgt',
	},
	{
		path: 'pjgt',
		component: () => import('src/pages/ugt/pjgt/PjgtIndex.vue'),
	},
	{
		path: 'pjgt/:id',
		component: () => import('src/pages/ugt/pjgt/PjgtDetail.vue'),
	},
	{
		path: 'gt',
		component: () => import('src/pages/ugt/gt/GtIndex.vue'),
	},
	{
		path: 'gt/:id',
		component: () => import('src/pages/ugt/gt/GtDetail.vue'),
	},
	{
		path: 'kas',
		component: () => import('src/pages/ugt/kas/KasIndex.vue'),
	},
];
