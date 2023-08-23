import { ArxMap, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'
import { removePolygonsWithinBox } from '@/tools/removePolygonsWithinBox.js'

export const removeBlockedStairs = (map: ArxMap) => {
  const box1 = new Box3(new Vector3(9700, 850, 12920), new Vector3(9900, 1110, 13400))
  const box2 = new Box3(new Vector3(9800, 800, 12980), new Vector3(10200, 1106, 13355))

  removePolygonsWithinBox(box1, map)
  removePolygonsWithinBox(box2, map)
}
