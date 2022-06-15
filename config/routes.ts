export default [
  { path: '/', component: '@/pages/index', access: 'isAAA' },
  {
    path: '/',
    component: '@/layouts/index',
    name: '一级',
    access: 'isUser',
    // hideChildrenInMenu: true,
    // 子路由
    routes: [
      { path: 'user', component: '@/pages/User', name: '二级', hideInMenu: false, access: 'isAdmin' },
    ]
  }
]
