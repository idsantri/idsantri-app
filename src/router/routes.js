const routes = [
	{
		path: '/',
		name: 'Auth',
		component: () => import('layouts/AuthLayout.vue'),
		children: [
			{
				path: '/logout',
				name: 'Logout',
				component: () => import('../pages/auth/LogoutPage.vue'),
				meta: { title: 'Logout' },
			},
			{
				path: 'verify',
				name: 'Verify',
				component: () => import('../pages/auth/VerifyPage.vue'),
				meta: { title: 'Verifikasi Email' },
			},
			{
				path: 'register',
				name: 'Register',
				component: () => import('../pages/auth/RegisterPage.vue'),
				meta: { title: 'Registrasi' },
			},
			{
				path: 'login',
				name: 'Login',
				component: () => import('../pages/auth/LoginPage.vue'),
				meta: { title: 'Login' },
			},
			{
				path: 'forgot-password',
				name: 'Forgot',
				component: () => import('../pages/auth/ForgotPage.vue'),
				meta: { title: 'Lupa Password' },
			},
			{
				path: 'reset-password',
				name: 'Reset',
				component: () => import('../pages/auth/ResetPage.vue'),
				meta: { title: 'Ganti Password' },
			},
		],
	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				redirect: '/home',
			},
			{
				path: 'home',
				component: () => import('src/pages/home/HomeIndex.vue'),
				meta: { title: 'Home' },
			},
			{
				path: 'sekretariat',
				component: () => import('src/pages/sekretariat/IndexPage.vue'),
				meta: { title: 'Sekretariat' },
			},
			{
				path: 'santri/:id',
				component: () => import('src/pages/santri/SantriDetail.vue'),
				meta: { title: 'Santri' },
			},
			{
				path: 'products/categories/:category',
				component: () => import('src/pages/products/ProductAll.vue'),
			},
			{
				path: 'orders/current',
				component: () => import('src/pages/orders/OrderCurrent.vue'),
			},
			{
				path: 'orders/:id',
				component: () => import('src/pages/orders/OrderDetail.vue'),
			},
			{
				path: 'stores/:id/stocks',
				component: () =>
					import('src/pages/stores/stocks/StoresStocks.vue'),
			},
			{
				path: 'stores/:id/orders',
				component: () =>
					import('src/pages/stores/orders/StoresOrders.vue'),
			},
			{
				path: 'settings',
				children: [
					{
						path: 'app',
						component: () =>
							import('src/pages/settings/IndexSetting.vue'),
					},
					{
						path: 'users',
						component: () =>
							import('src/pages/users/UsersPage.vue'),
					},
					{
						path: 'users/:id',
						component: () =>
							import('src/pages/users/UsersDetail.vue'),
					},
				],
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/pages/errors/ErrorNotFound.vue'),
	},
];

export default routes;