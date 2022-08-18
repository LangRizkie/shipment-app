export type SelectType = {
  select: Array<SelectModel>
}

export class SelectModel {
  name: string
  type: string

  constructor(json: { [x: string]: any }) {
    this.name = json['name']
    this.type = json['type']
  }
}