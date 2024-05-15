import { baseUrl } from 'boot/axios';
import { notifyError } from 'src/utils/notify';

const api = baseUrl;
// Tambahkan interceptor untuk menangani kesalahan
api.interceptors.response.use(
	(response) => response,
	(error) => {
		// Tangani kesalahan jaringan atau koneksi di sini
		if (!error.response) {
			// Kesalahan tidak ada respons (seperti jaringan terputus)
			// console.log('e', error);
			notifyError('Tidak dapat terhubung ke server');
		} else {
			// Teruskan kesalahan lain ke blok catch berikutnya
			return Promise.reject(error);
		}
	},
);
export default api;
