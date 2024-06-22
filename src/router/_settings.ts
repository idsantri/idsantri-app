export default [
	{
		path: 'lists',
		component: () => import('src/pages/settings/lists/ListsIndex.vue'),
		meta: { title: 'Setting: List' },
		children: [
			{
				path: ':listKey',
				component: () =>
					import('src/pages/settings/lists/ListsByKey.vue'),
			},
		],
	},
	{
		path: 'users',
		component: () => import('src/pages/settings/users/UserPage.vue'),
		meta: { title: 'Setting: User' },
	},
	{
		path: 'profile',
		component: () => import('src/pages/settings/profile/IndexProfile.vue'),
		meta: { title: 'Setting: Profile' },
	},
	{
		path: 'reports',
		component: () => import('src/pages/settings/reports/IndexReport.vue'),
		meta: { title: 'Setting: Reports' },
	},
];
