import axios from 'axios';
import { baseUrl } from 'src/boot/axios';

const baseURL = baseUrl.defaults.baseURL;

const api = axios.create({ baseURL: baseURL });
const apiTokened = axios.create({ baseURL: baseURL });

const auth = JSON.parse(sessionStorage.getItem('auth'));
const token = auth ? auth.token : 'FAIL TO GET TOKEN';

const Authorization = `Bearer ${token}`;
apiTokened.defaults.headers.common['Authorization'] = Authorization;

export { api, apiTokened, baseURL, Authorization };
