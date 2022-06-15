export default [
  { path: '/', component: '@/pages/index' },
  {
    path: '/',
    component: '@/layouts/index',
    // 子路由
    routes: [
      { path: 'user', component: '@/pages/User' },
    ]
  }
]
