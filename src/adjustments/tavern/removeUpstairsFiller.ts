import { ArxMap, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'
import { removePolygonsWithinBox } from '@/tools/removePolygonsWithinBox.js'

export const removeUpstairsFiller = (map: ArxMap) => {
  const box = new Box3(new Vector3(8730, 800, 12780), new Vector3(10500, 830, 13560))

  removePolygonsWithinBox(box, map)
}
