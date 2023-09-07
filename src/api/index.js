import axios from 'axios';
import { baseUrl } from 'src/boot/axios';

const url = baseUrl.defaults.baseURL;

const api = axios.create({ baseURL: url });
const apiTokened = axios.create({ baseURL: url });

const auth = JSON.parse(sessionStorage.getItem('auth'));
const token = auth ? auth.token : 'FAIL TO GET TOKEN';

apiTokened.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export { api, apiTokened };
