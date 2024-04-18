import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import config from '@/config';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$axios: AxiosInstance;
		$api: AxiosInstance;
	}
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const url =
	process.env.NODE_ENV == 'development'
		? 'http://localhost:8000/api'
		: config.BASE_API;

const baseUrl = axios.create({ baseURL: url });
baseUrl.defaults.withCredentials = true;

export default boot(({ app }) => {
	// for use inside Vue files (Options API) through this.$axios and this.$api

	app.config.globalProperties.$axios = axios;
	// ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
	//       so you won't necessarily have to import axios in each vue file

	app.config.globalProperties.$api = baseUrl;
	// ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
	//       so you can easily perform requests against your app's API
});

export { baseUrl };
