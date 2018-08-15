import Axios from '../index';
import qs from 'qs';
function token() {
  return {
    share_token: localStorage.getItem('token'),
    share_sign: '123456'
  };
}

/**
 * 调用登陆接口
 * @param {*} option
 */

export function postlogin(option) {
  return Axios.post(`?s=Login.index`, qs.stringify({...option, ...token()}));
}

/**
 * 调用注册接口
 * @param {*} option
 */

export function register(option) {
  return Axios.post(`?s=Login.register`, qs.stringify({...option, ...token()}));
}

/**
 * 调用忘记密码接口
 * @param {*} option
 */

export function resetpassw(option) {
  return Axios.post(`?s=Login.forget_password`, qs.stringify({...option, ...token()}));
}

/*
*短信发送
*/
export function postsend(option) {
  return Axios.post(`?s=User.Sms.Send`, qs.stringify({...option, ...token()}));
}

/**
 * 验证码验证
 * @param {*} option
 */
export function postverify(option) {
  return Axios.post(`?s=User.Sms.Verify`, qs.stringify({...option, ...token()}));
}

/**
 * 微博登录
 */
export function requestAuthorize(option) {
  return Axios.post(`?s=OAthor.RequestAuthorize`, qs.stringify({...option, ...token()}));
}
