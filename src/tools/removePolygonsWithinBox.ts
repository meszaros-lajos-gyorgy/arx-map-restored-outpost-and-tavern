import { ArxMap } from 'arx-level-generator'
import { Box3 } from 'three'

export const removePolygonsWithinBox = (box: Box3, map: ArxMap) => {
  const numberOfPolygons = map.polygons.length
  for (let i = numberOfPolygons - 1; i > 0; i--) {
    const polygon = map.polygons[i]

    if (polygon.isWithin(box)) {
      map.polygons.splice(i, 1)
    }
  }
}
