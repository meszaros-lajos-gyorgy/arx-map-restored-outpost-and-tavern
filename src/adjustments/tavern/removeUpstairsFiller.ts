import { ArxMap, Vector3 } from 'arx-level-generator'
import { Box3 } from 'three'

export const removeUpstairsFiller = (map: ArxMap) => {
  const box = new Box3(new Vector3(8730, 800, 12780), new Vector3(10500, 830, 13560))
  map.polygons.selectWithinBox(box).removeSelected()
}
