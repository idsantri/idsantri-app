export default [
	{
		path: 'release',
		component: () => import('src/pages/info/ReleasePage.vue'),
		meta: { title: 'Info: Release' },
	},
	{
		path: 'download',
		component: () => import('src/pages/info/DownloadPage.vue'),
		meta: { title: 'Info: Download' },
	},
];
