export interface Menu {
	name: string
	path: string
	icon: string
	children?: Menu[]
}
export interface DefaultState {
	menuList: Array<Menu>
}
