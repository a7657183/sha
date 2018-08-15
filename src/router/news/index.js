export default [{
  path: '/news',
  name: 'news',
  component: resolve => require(['@/modules/news'], resolve)
}, {
  path: '/news-details',
  name: 'news-details',
  component: resolve => require(['@/modules/news/news-details'], resolve)
}];
