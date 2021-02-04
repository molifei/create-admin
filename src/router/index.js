import Vue from 'vue'
import VueRouter from 'vue-router'
import $tools from '@/utils/tools'

import Layout from '@/layout/Layout'

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter)

// 引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login')
  },
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    component: Layout,
    children: [
      {
        path: '/chart',
        name: 'ChartIndex',
        meta: { title: '图表', icon: 'el-icon-finished' },
        component: () => import('@/views/Chart/Chart'),
      },
      {
        path: '/guide',
        name: 'Guide',
        meta: { title: '引导', icon: 'el-icon-rank' },
        component: () => import('@/views/Guide/Guide'),
      },
      {
        path: '/table',
        name: 'Table',
        redirect: '/table/all',
        meta: { title: '表格', icon: 'el-icon-c-scale-to-original' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/table/all',
            name: 'TableAll',
            meta: { title: '全部表格' },
            component: () => import('@/views/Table/All'),
          },
          {
            path: '/table/dynamic',
            name: 'TableDynamic',
            meta: { title: '动态表格' },
            component: () => import('@/views/Table/Dynamic'),
          },
        ]
      },
      {
        path: '/text',
        name: 'Text',
        meta: { title: '富文本编辑器', icon: 'el-icon-edit' },
        component: () => import('@/views/Text/Text'),
      },
      {
        path: '/upload',
        name: 'Upload',
        meta: { title: '上传', icon: 'el-icon-upload2' },
        component: () => import('@/views/Upload/Upload'),
      },
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound')
  },
]

const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }

  let isToLogin = to.path === '/login'

  let isUser = $tools.getS('user', 2)

  if (isToLogin && isUser) {
    next('/')
  }

  if (!isToLogin && !isUser) {
    next('/login')
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
