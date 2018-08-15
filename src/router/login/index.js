export default [{
  path: '/login',
  name: 'login',
  component: resolve => require(['@/modules/login'], resolve)
}, {
  path: '/register',
  name: 'register',
  component: resolve => require(['@/modules/login/register'], resolve)
}, {
  path: '/resetpassw',
  name: 'resetpassw',
  component: resolve => require(['@/modules/login/resetpassw'], resolve)
}];
