import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path == '/main') {
    return firstMenu.url
  }
})

export default router

// 权限设置即动态路由
// 项目中动态路由的实现思路：在前端配置好多个映射关系 path1—>component1,
//    根据useMenus(url)来判断需要展示哪些组件，动态形成一个数组，然后放到main路由children中注册

// 其他思路1：全部组件映射到对应子路由中，而main页面根据useMenus数据来渲染对应的组件
//    所以main页面实现表面上的权限展示，实则在路径中直接输入对应URL也能展示出对应的组件
// 其他思路2：通过有几个角色，来创建对应的路由集合；但如果有新添加的角色，需要前端写入对应代码，重新部署
