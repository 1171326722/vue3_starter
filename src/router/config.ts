import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/Index.vue'
import UserManage from '../pages/userManage/Index.vue'
import Dashboard from '../pages/dashboard/Index.vue'
import ArticleManage from '../pages/articleManage/Index.vue'
import Login from '../pages/login/Index.vue'

const routes = [
	// 路由的默认路径
	{
		path: '/',
		name: 'index',
		component: Layout,
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				meta: {
					title: '主页'
				},
				component: Dashboard
			},
			{
				path: '/userManage',
				name: 'userManage',
				meta: {
					title: '权限管理'
				},
				component: UserManage
			},
			{
				path: '/articleManage',
				name: 'articleManage',
				meta: {
					title: '文章管理'
				},
				component: ArticleManage
			}
		]
	},
	{
		path: '/Login',
		component: Login
	}
]

// 创建路由对象
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router
