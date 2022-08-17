export type MenuType = {
  menu: Array<MenuModel>
}

export class MenuModel {
  icon: string
  name: string

  constructor(json: { [x: string]: string }) {
    this.icon = json['href']
    this.name = json['rel']
  }
}