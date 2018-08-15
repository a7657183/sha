import Axios from '../index';
import qs from 'qs';
function token() {
  return {
    share_token: localStorage.getItem('token'),
    share_sign: '123456'
  };
}

/**
 * 调用个人中心接口
 * @param {*} option
 */

export function personalcenter(option) {
  return Axios.post(`?s=User.Index.index`, qs.stringify({...option, ...token()}));
}

/**
 * 调用银行卡实名认证接口
 * @param {*} option
 */

export function mywalletbankC(option) {
  return Axios.post(`?s=User.Index.AuthCard`, qs.stringify({...option, ...token()}));
}

/**
 * 调用获取用户信息接口
 * @param {*} option
 */

export function usermsg(option) {
  return Axios.post(`?s=User.Index.UserMsg`, qs.stringify({...option, ...token()}));
}

/**
 * 调用我的钱包接口
 * @param {*} option
 */
export function mywallet(option) {
  return Axios.post(`?s=User.Index.my_pocket`, qs.stringify({...option, ...token()}));
}

/**
 * 调用我的收藏列表接口
 * @param {*} option
 */
export function myCollect(option) {
  return Axios.post(`?s=User.Index.myCollect`, qs.stringify({...option, ...token()}));
}

/**
 * 调用删除收藏接口
 * @param {*} option
 */
export function delCollect(option) {
  return Axios.post(`?s=User.Index.delCollect`, qs.stringify({...option, ...token()}));
}

/**
 * 调用更新用户信息接口
 * @param {*} option
 */
export function doUpdateUserMsg(option) {
  return Axios.post(`?s=User.Index.updateUserMsg`, qs.stringify({...option, ...token()}));
}

/**
 * 调用银行卡信息接口
 * @param {*} option
 */
export function showBankMsg(option) {
  return Axios.post(`?s=User.Index.my_bank_msg`, qs.stringify({...option, ...token()}));
}

/**
 * 添加投诉建议等
 */
export function addUserMsg(option) {
  return Axios.post(`?s=User.UserMsg.add`, qs.stringify({...option, ...token()}));
}

/**
 * 获取客服电话
 */
export function getKefuTel() {
  return Axios.post(`?s=User.Index.get_kefu_tel`, qs.stringify(token()));
}
