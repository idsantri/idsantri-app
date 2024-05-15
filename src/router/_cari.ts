import { RouteLocation } from 'vue-router';

export default [
	{
		path: '',
		redirect: (to: RouteLocation) => to.fullPath + '/santri',
	},
	{
		path: 'santri',
		component: () => import('src/pages/search/SantriSearch.vue'),
	},
	{
		path: 'wali',
		component: () => import('src/pages/search/WaliSearch.vue'),
	},
	{
		path: 'ortu',
		component: () => import('src/pages/search/OrtuSearch.vue'),
	},
];
