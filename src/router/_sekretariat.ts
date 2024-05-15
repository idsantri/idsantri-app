export default [
	{
		path: '',
		component: () => import('src/pages/sekretariat/IndexPage.vue'),
	},
	{
		path: 'export',
		component: () => import('src/pages/sekretariat/ExportPage.vue'),
	},
];
