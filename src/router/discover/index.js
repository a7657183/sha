export default [
  {
    path: '/discover',
    name: 'discover',
    component: resolve => require(['@/modules/discover'], resolve)
  }, {
    path: '/discovertwo',
    name: 'discovertwo',
    component: resolve => require(['@/modules/discover/discovertwo'], resolve)
  }
];
