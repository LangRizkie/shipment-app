export class LinkModel {
  href: string
  rel?: string
  icon?: string

  constructor(json: { [x: string]: any }) {
    this.href = json['href']
    this.rel = json['rel']
    this.icon = json['icon']
  }
}