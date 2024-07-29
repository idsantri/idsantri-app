import { RouteLocation } from 'vue-router';

export default [
	{
		path: 'mutasi',
		redirect: (to: RouteLocation) => `${to.fullPath}/result`,
		meta: { title: 'Makhadiyah: Mutasi Domisili' },
		children: [
			{
				path: 'result',
				component: () =>
					import(
						'src/pages/makhadiyah/mutasi/result/ResultMutasi.vue'
					),
			},
			{
				path: 'start',
				component: () =>
					import(
						'src/pages/makhadiyah/mutasi/proses/ProsesiIndex.vue'
					),
			},
		],
	},
];
