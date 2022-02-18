import { defineStore } from 'pinia'
import { UserState, Menu } from '../type'

const defaultState: UserState = {
	menuList: [
		{
			name: '主页',
			path: '/dashboard',
			icon: 'icon2'
		},
		{
			name: '管理',
			icon: 'icon1',
			children: [
				{ name: '用户管理', path: '/userManage', icon: 'icon1' },
				{ name: '文章管理', path: '/articleManage', icon: 'icon2' }
			]
		}
	]
}

// Create a new store instance.
export const useUserStore = defineStore({
	id: 'user',
	state() {
		return defaultState
	},
	actions: {},
	getters: {
		getMenuList(): Menu[] {
			return this.menuList
		}
	}
})
