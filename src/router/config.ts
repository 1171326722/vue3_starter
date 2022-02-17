import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/Index.vue'
import UserManage from '../pages/userManage/Index.vue'
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
				path: '/userManage',
				name: '/userManage',
				meta: {
					title: '用户管理'
				},
				component: UserManage,
				children: [
					{
						path: '/userManage/item1',
						name: '/userManage/item1',
						meta: {
							title: '菜单1'
						},
						component: UserManage
					}
				]
			},
			{
				path: '/articleManage',
				name: '/articleManage/item2',
				meta: {
					title: '菜单2'
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
