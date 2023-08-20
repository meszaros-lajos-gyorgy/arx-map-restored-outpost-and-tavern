import { ArxMap, Texture } from 'arx-level-generator'
import { removePolygonsByTexture } from '@/tools/removePolygonsByTexture.js'

const woodBlacksmithCeiling1 = new Texture({ filename: '[wood]_blacksmith_ceiling1' })
const woodBlacksmithCeiling2 = new Texture({ filename: '[wood]_blacksmith_ceiling2' })

export const removeCeiling = (map: ArxMap) => {
  // TODO: only remove within the tavern

  removePolygonsByTexture(woodBlacksmithCeiling1, map)
  removePolygonsByTexture(woodBlacksmithCeiling2, map)
}
