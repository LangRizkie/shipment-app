import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

type MenuType = {
  icon: string
  name: string
}

const directory = path.join(process.cwd(), 'json')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<MenuType>>
) {
  const result = await fs.readFile(directory + '/menu.json', 'utf8')

  res.status(200).json(JSON.parse(result))
}
