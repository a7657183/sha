import Axios from '../index';
import qs from 'qs';
import config from '../config';
function token() {
  return {
    share_token: localStorage.getItem('token'),
    share_sign: '123456'
  };
}
/**
 * 获取地区
 * @param {*} option
 */
export function getRegion(option) {
  return Axios.post(`?s=Login.get_region_msg`, qs.stringify({...option, ...token()}));
}

/**
 * 身份证认证
 * @param {*} option
 */
export function postAuthentication(option) {
  return Axios.post(`?s=User.Index.Authentication`, qs.stringify({...option, ...token()}));
}

/**
 * 首页各列表数据
 * *依次为车位、房屋、人力、票据、交通
 * @param {*} option
 */
export function postGoodsList(option, val) {
  let url = '';
  if (val === '1') {
    url = `?s=Goods.car_list`;
  }
  if (val === '2') {
    url = `?s=Goods.house_list`;
  }
  if (val === '3') {
    url = `?s=Goods.person_list`;
  }
  if (val === '4') {
    url = `?s=Goods.team_list`;
  }
  if (val === '5') {
    url = `?s=Goods.traffic_list`;
  }
  return Axios.post(url, qs.stringify(option));
}

/**
 * 首页各列表数据详情页
 * *依次为车位、房屋、人力、票据、交通
 * @param {*} option
 */
export function postParticulars(option, val) {
  let url = '';
  if (val === '1') {
    url = `?s=Goods.car_info`;
  }
  if (val === '2') {
    url = `?s=Goods.house_info`;
  }
  if (val === '3') {
    url = `?s=Goods.person_info`;
  }
  if (val === '4') {
    url = `?s=Goods.team_info`;
  }
  if (val === '5') {
    url = `?s=Goods.traffic_info`;
  }
  return Axios.post(url, qs.stringify({...option, ...token()}));
}

/**
 * 发布共享及需求
 * *依次为车位、房屋、人力、票据、交通
 * @param {*} option
 */
export function postPublish(val, option) {
  let url = '';
  if (val === '1') {
    url = `?s=User.Realease.add_goods_car`;
  }
  if (val === '2') {
    url = `?s=User.Realease.add_goods_house`;
  }
  if (val === '3') {
    url = `?s=User.Realease.add_goods_person`;
  }
  if (val === '4') {
    url = `?s=User.Realease.add_goods_team`;
  }
  if (val === '5') {
    url = `?s=User.Realease.add_goods_traffic`;
  }
  return Axios.post(url, qs.stringify({...option, ...token()}));
}

/**
 * 我发布的列表
 * @param {*} option
 */
export function postMyGoods(option) {
  return Axios.post(`?s=Goods.get_my_goods`, qs.stringify({...option, ...token()}));
}

/**
 * 上传文件
 */
export const uploadFile = `${config.baseURL}/?s=User.Realease.upload_goods_img`;

/**
 * 发现
 * @param {*} option
 */
export function postFindList(option) {
  return Axios.post(`?s=Goods.goods_list`, qs.stringify(option));
}

/**
 * 首页
 * @param {*} option
 */
export function getIndexGoods(option) {
  return Axios.post(`?s=Goods.index_goods_car`, qs.stringify(option));
}

/**
 * 生成订单
 * @param {*} option
 */
export function postAddOrder(option) {
  return Axios.post(`?s=User.Order.Add_order`, qs.stringify({...option, ...token()}));
}

/**
 * 收藏
 * @param {*} option
 */
export function postAddCollect(option) {
  return Axios.post(`?s=User.Index.addCollect`, qs.stringify({...option, ...token()}));
}

/**
 * 提现
 * @param {} option
 */
export function postAddTixian(option) {
  return Axios.post(`?s=User.Tixian.add`, qs.stringify({...option, ...token()}));
}

/**
 * 是否认证
 */
export function isAuth(option) {
  return Axios.post(`?s=User.Index.is_auth_card`, qs.stringify({...option, ...token()}));
}

/**
 * 获取共享时间节点
 */
export function getTimeType() {
  return Axios.post(`?s=User.Realease.get_time_type`, qs.stringify(token()));
}

/**
 * 获取车位共享是否第一次
 */
export function isUserUsedCar() {
  return Axios.post(`?s=User.Order.is_user_goods_car`, qs.stringify(token()));
}

/**
 * 获取车位共享是否第一次
 */
export function getTimeLegal(option) {
  return Axios.post(`?s=Goods.check_car_time_legal`, qs.stringify({...option, ...token()}));
}
