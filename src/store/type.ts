export interface Menu {
	name: string
	path?: string
	icon?: string
	children?: Menu[]
}
export interface UserState {
	menuList: Array<Menu>
}

export interface Tab {
	name: string
	path: string
}

export interface TabState {
	tabList: Array<Tab>
	activeKey: string
}
