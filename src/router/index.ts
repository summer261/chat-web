import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      title: '主页',
      icon: 'ChatSquare',
      sidebar: true // 标记此路由需要显示在侧边栏
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/components/About.vue'),
    meta: {
      title: '设置',
      icon: 'setting',
      sidebar: true // 标记此路由需要显示在侧边栏
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(''),
  routes
})

export default router