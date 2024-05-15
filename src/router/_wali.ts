export default [
	{
		path: '',
		redirect: 'cari/wali',
	},
	{
		path: ':id',
		component: () => import('src/pages/wali/WaliDetail.vue'),
	},
];
