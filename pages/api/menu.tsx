import path from 'path'

import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'

import { MenuModel } from '../../models/menu.module'

const directory = path.join(process.cwd(), 'json')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<MenuModel>>
) {
  const result = await fs.readFile(directory + '/menu.json', 'utf8')

  res.status(200).json(JSON.parse(result))
}
