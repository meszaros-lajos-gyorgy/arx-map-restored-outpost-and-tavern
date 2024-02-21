import { ArxMap, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'

export const removeBlockedStairs = (map: ArxMap) => {
  const box1 = new Box3(new Vector3(9700, 850, 12920), new Vector3(9900, 1110, 13400))
  const box2 = new Box3(new Vector3(9800, 800, 12980), new Vector3(10200, 1106, 13355))

  map.polygons.selectWithinBox(box1).removeSelected()
  map.polygons.selectWithinBox(box2).removeSelected()
}
