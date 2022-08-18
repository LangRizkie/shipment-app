export type MenuType = {
  menu: Array<MenuModel>
}

export class MenuModel {
  icon: string
  name: string
  url: string
  useSidebar: boolean

  constructor(json: { [x: string]: any }) {
    this.icon = json['icon']
    this.name = json['name']
    this.url = json['url']
    this.useSidebar = json['useSidebar']
  }
}