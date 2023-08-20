import { ArxMap, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'
import { removePolygonsWithinBox } from '@/tools/removePolygonsWithinBox.js'

export const removeBlockedStairs = (map: ArxMap) => {
  const box = new Box3(new Vector3(9700, 850, 12920), new Vector3(9900, 1110, 13400))

  removePolygonsWithinBox(box, map)
}
