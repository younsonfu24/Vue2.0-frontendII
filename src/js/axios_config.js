import axios from 'axios';

import { domain } from './api_config.js';

// 配置默认的域名
axios.defaults.baseURL = domain;

// 因为我们调用的接口都是跨域的，默认不会懈怠 cookie，如果携带，就必须要设置 withCredentials 为 true
axios.defaults.withCredentials = true;

// 导出配置后的 axios
export default axios;