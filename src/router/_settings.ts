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
		meta: { title: 'Setting: User' },
		children: [
			{
				path: '',
				component: () =>
					import('src/pages/settings/users/UserPage.vue'),
			},
			{
				path: ':id',
				component: () => import('src/pages/settings/users/UserId.vue'),
			},
		],
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
