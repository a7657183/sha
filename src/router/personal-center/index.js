export default [{
  path: '/personal-center',
  name: 'personal-center',
  component: resolve => require(['@/modules/personal-center'], resolve)
}, {
  path: '/personal-userSet',
  name: 'personal-userSet',
  component: resolve => require(['@/modules/personal-center/components/user-set'], resolve)
}, {
  path: '/shippingadd',
  name: 'shippingadd',
  component: resolve => require(['@/modules/personal-center/components/shippingadd'], resolve)
}, {
  path: '/editadd',
  name: 'editadd',
  component: resolve => require(['@/modules/personal-center/components/editadd'], resolve)
}, {
  path: '/myissue',
  name: 'myissue',
  component: resolve => require(['@/modules/personal-center/components/myissue'], resolve)
}, {
  path: '/mycollect',
  name: 'mycollect',
  component: resolve => require(['@/modules/personal-center/components/mycollect'], resolve)
}, {
  path: '/histories',
  name: 'histories',
  component: resolve => require(['@/modules/personal-center/components/histories'], resolve)
}, {
  path: '/mywallet',
  name: 'mywallet',
  component: resolve => require(['@/modules/personal-center/components/mywallet'], resolve)
}, {
  path: '/mywalletpay',
  name: 'mywalletpay',
  component: resolve => require(['@/modules/personal-center/components/mywalletpay'], resolve)
}, {
  path: '/mywalletkiting',
  name: 'mywalletkiting',
  component: resolve => require(['@/modules/personal-center/components/mywalletkiting'], resolve)
}, {
  path: '/mywalletbankC',
  name: 'mywalletbankC',
  component: resolve => require(['@/modules/personal-center/components/mywalletbankC'], resolve)
}, {
  path: '/usermsg',
  name: 'usermsg',
  component: resolve => require(['@/modules/personal-center/components/usermsg'], resolve)
}, {
  path: '/personal-com',
  name: 'personal-com',
  component: resolve => require(['@/modules/personal-center/components/personal-com'], resolve)
}, {
  path: '/certification',
  name: 'certification',
  component: resolve => require(['@/modules/personal-center/components/certification'], resolve)
}, {
  path: '/sesameAut',
  name: 'sesameAut',
  component: resolve => require(['@/modules/personal-center/components/sesameAut'], resolve)
}, {
  path: '/fingerprintAut',
  name: 'fingerprintAut',
  component: resolve => require(['@/modules/personal-center/components/fingerprintAut'], resolve)
}, {
  path: '/faceAut',
  name: 'faceAut',
  component: resolve => require(['@/modules/personal-center/components/faceAut'], resolve)
}, {
  path: '/bankCard',
  name: 'bankCard',
  component: resolve => require(['@/modules/personal-center/components/bankCard'], resolve)
}, {
  path: '/textForm',
  name: 'textForm',
  component: resolve => require(['@/modules/personal-center/components/textForm'], resolve)
}];
