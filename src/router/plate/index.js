export default [{
  path: '/truck-space',
  name: 'truck-space',
  component: resolve => require(['@/modules/plate/truck-space'], resolve)
}, {
  path: '/parking-details',
  name: 'parking-details',
  component: resolve => require(['@/modules/plate/components/parking-details'], resolve)
}, {
  path: '/house-list',
  name: 'house-list',
  component: resolve => require(['@/modules/plate/house-list'], resolve),
  meta: {
    title: 'house-list'
  }
}, {
  path: '/house-details',
  name: 'house-details',
  component: resolve => require(['@/modules/plate/components/house-details'], resolve),
  meta: {
    title: 'house-details'
  }
}];
