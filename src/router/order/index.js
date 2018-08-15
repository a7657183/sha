export default [
  {
    path: '/order',
    name: 'order',
    component: resolve => require(['@/modules/order'], resolve)
  }, {
    path: '/order-details',
    name: 'order-details',
    component: resolve => require(['@/modules/order/order-details'], resolve)
  }, {
    path: '/commentList',
    name: 'commentList',
    component: resolve => require(['@/modules/order/commentList'], resolve)
  }
];
