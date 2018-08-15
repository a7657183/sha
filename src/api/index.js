import axios from 'axios';
import apiConfig from './config';

// import { fail } from 'assert';
// import message from 'iview/src/components/message';
const Axios = axios.create({
  baseURL: apiConfig.baseURL,
  responseType: 'json',
  withCredentials: false,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Accept': 'application/x-www-form-urlencoded'
  }
});

Axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

Axios.interceptors.response.use(res => {
  if (res.data.ret === 406) {
    window.location.href = `/跳转登录页面`;
    return false;
  }

  if (res.data.ret === 200) {
    return res.data;
  } else {
    return Promise.reject(res.data);
  }
}, error => {
  // message.error('网络链接错误，请稍后再试');
  return Promise.reject(error);
});

export default Axios;
