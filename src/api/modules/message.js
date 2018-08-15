import Axios from '../index';
import qs from 'qs';
function token() {
  return {
    share_token: localStorage.getItem('token'),
    share_sign: '123456'
  };
}

/**
 * 调用获取消息列表接口
 * @param {*} option
 */

export function message(option) {
  return Axios.post(`?s=User.Message.message_list`, qs.stringify({...option, ...token()}));
}

/**
 * 调用获取消息详情接口
 * @param {*} option
 */

export function postmsgdetail(option) {
  return Axios.post(`?s=User.Message.message_info`, qs.stringify({...option, ...token()}));
}
