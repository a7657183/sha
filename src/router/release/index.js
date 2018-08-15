export default [
  {
    path: '/release',
    name: 'release',
    component: resolve => require(['@/modules/release'], resolve)
  },
  {
    path: '/form',
    name: 'form',
    component: resolve => require(['@/modules/release/components/release-form'], resolve)
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: resolve => require(['@/modules/release/components/authentication'], resolve)
  },
  {
    path: '/release-list',
    name: 'release-list',
    component: resolve => require(['@/modules/release/components/release-list'], resolve)
  }
];
