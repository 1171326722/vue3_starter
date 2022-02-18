import { Item } from 'ant-design-vue/lib/menu'
import { defineStore } from 'pinia'
import { TabState, Tab } from '../type'

const defaultState: TabState = {
	tabList: [
		{
			name: '主页',
			path: '/dashboard'
		}
	],
	activeKey: '/dashboard'
}

// Create a new store instance.
export const useTabStore = defineStore({
	id: 'tab',
	state() {
		return defaultState
	},
	actions: {
		addTab(tab: Tab) {
			if (
				this.tabList.findIndex((item) => {
					return item.path == tab.path
				}) == -1
			) {
				this.tabList.push(tab)
			}
			console.log(tab)
			this.activeKey = tab.path
		},
		closeTab(path: string) {
			let newTabList = this.tabList.filter((item) => {
				return item.path != path
			})
			this.tabList = newTabList
		},
		changeActiveKey(key: string) {
			this.activeKey = key
		}
	},
	getters: {
		getTabList(): Tab[] {
			return this.tabList
		},
		getActiveKey(): string {
			return this.activeKey
		}
	}
})
