import { route } from 'quasar/wrappers';
import {
	createMemoryHistory,
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import routes from './routes';
import { nextTick } from 'vue';
import authStore from '../stores/auth-store';
import constanta from 'src/config/constanta';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
	const createHistory = process.env.SERVER
		? createMemoryHistory
		: process.env.VUE_ROUTER_MODE === 'history'
			? createWebHistory
			: createWebHashHistory;

	const Router = createRouter({
		scrollBehavior: () => ({ left: 0, top: 0 }),
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(process.env.VUE_ROUTER_BASE),
	});

	Router.beforeEach((to, from, next) => {
		if (to.fullPath == '/') {
			return next('/cari');
		}

		const store = authStore();
		const authRoutes = ['Register', 'Login', 'Forgot', 'Reset', 'Verify'];
		const toAuthRoutes = authRoutes.includes(to.name as string);
		const isAuthenticate =
			store.getToken && (store.getToken as string).length > 0;

		if (!toAuthRoutes && !isAuthenticate) {
			next('/login');
		} else if (toAuthRoutes && isAuthenticate) {
			history.go(-1);
		} else {
			next();
		}
	});

	const DEFAULT_TITLE = constanta.APP_NAME_1;
	Router.afterEach((to) => {
		nextTick(() => {
			document.title = to.meta.title
				? DEFAULT_TITLE + ' — ' + to.meta.title
				: DEFAULT_TITLE;
		});
	});

	return Router;
});
