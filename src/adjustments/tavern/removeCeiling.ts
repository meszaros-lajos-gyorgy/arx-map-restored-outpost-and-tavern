import { ArxMap, Texture, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'
import { woodBlacksmithCeiling1, woodBlacksmithCeiling2 } from '@/textures.js'
import { removePolygonsByTextureWithinBox } from '@/tools/removePolygonsByTextureWithinBox.js'

export const removeCeiling = (map: ArxMap) => {
  const box = new Box3(new Vector3(8100, 800, 12000), new Vector3(8100 + 2500, 830, 13600))

  removePolygonsByTextureWithinBox(woodBlacksmithCeiling1, box, map)
  removePolygonsByTextureWithinBox(woodBlacksmithCeiling2, box, map)
}
