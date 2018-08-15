import Axios from '../index';
import qs from 'qs';
function token() {
  return {
    share_token: localStorage.getItem('token'),
    share_sign: '123456'
  };
}

/**
 * 调用订单详情接口
 * @param {*} option
 */

export function orderDetail(option) {
  return Axios.post(`?s=User.Order.Order_detail`, qs.stringify({...option, ...token()}));
}

/**
 * 订单列表
 * @param {} option
 */
export function postorderList(option) {
  return Axios.post(`?s=User.Order.Order_list`, qs.stringify({...option, ...token()}));
}

/**
 * 商品删除接口
 * @param {*} option
 */
export function postOrderDelete(option) {
  return Axios.post(`?s=User.Order.Delete_order`, qs.stringify({...option, ...token()}));
}

/**
 * 添加评论
 * @param {*} option
 */
export function addComment(option) {
  return Axios.post(`?s=User.Comment.add`, qs.stringify({...option, ...token()}));
}

/**
 * 评论列表
 * @param {*} option
 */
export function getCommentList(option) {
  return Axios.post(`?s=User.Comment.get_comment_list`, qs.stringify({...option, ...token()}));
}

/**
 * 删除评论
 * @param {*} option
 */
export function delComment(option) {
  return Axios.post(`?s=User.Comment.delete_comment`, qs.stringify({...option, ...token()}));
}

/**
 * 删除评论
 * @param {*} option
 */
export function postPayOrder(option) {
  return Axios.post(`?s=User.Order.Pay_order`, qs.stringify({...option, ...token()}));
}
