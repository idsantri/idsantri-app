export default [
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
];
