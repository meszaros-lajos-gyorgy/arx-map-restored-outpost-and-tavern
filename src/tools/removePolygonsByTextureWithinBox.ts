import path from 'node:path'
import { ArxMap, Texture } from 'arx-level-generator'
import { Box3 } from 'three'

export const removePolygonsByTextureWithinBox = (texture: Texture, box: Box3, map: ArxMap) => {
  const { name: textureFilename } = path.parse(texture.filename.toLowerCase())

  const numberOfPolygons = map.polygons.length
  for (let i = numberOfPolygons - 1; i > 0; i--) {
    const polygon = map.polygons[i]

    if (!polygon.isWithin(box)) {
      continue
    }

    if (typeof polygon.texture === 'undefined') {
      continue
    }

    const { name: polygonTextureFilename } = path.parse(polygon.texture.filename.toLowerCase())
    if (polygonTextureFilename === textureFilename) {
      map.polygons.splice(i, 1)
    }
  }
}
