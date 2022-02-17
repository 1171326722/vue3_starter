import { defineStore } from 'pinia'
import { DefaultState, Menu } from '../type'

const defaultState: DefaultState = {
	menuList: [
		{
			name: '用户管理',
			path: '/userManage',
			icon: 'icon1',
			children: [{ name: '子菜单1', path: '/userManage/item1', icon: 'icon1' }]
		},
		{
			name: '文章管理',
			path: '/articleManage',
			icon: 'icon2',
			children: [{ name: '子菜单2', path: '/articleManage/item2', icon: 'icon2' }]
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
