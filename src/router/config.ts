import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/home/Index.vue';
import UserManage from '../pages/userManage/Index.vue';
import ArticleManage from '../pages/articleManage/Index.vue';
import Login from '../pages/login/Index.vue';

const routes = [
	// 路由的默认路径
	{
		path: '/',
		component: Home,
		children: [
			{
				path: '/home',
				component: Home,
			},
			{
				path: '/userManage',
				component: UserManage,
			},
			{
				path: '/articleManage',
				component: ArticleManage,
			},
		],
	},
	{
		path: '/Login',
		component: Login,
	},
];

// 创建路由对象
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
export default router;
