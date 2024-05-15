export default [
	{
		path: '',
		redirect: 'cari/ortu',
	},
	{
		path: ':id',
		component: () => import('src/pages/ortu/OrtuDetail.vue'),
	},
];
