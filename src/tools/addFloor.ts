import { ArxMap, DONT_QUADIFY, Texture } from 'arx-level-generator'
import { createPlaneMesh } from 'arx-level-generator/prefabs/mesh'
import { Box2, Vector2 } from 'three'

export const addFloor = (size: Box2, y: number, texture: Texture, map: ArxMap) => {
  const mesh = createPlaneMesh({
    size: new Vector2(size.max.x - size.min.x, size.max.y - size.min.y),
    texture,
  })
  mesh.translateX((size.min.x + size.max.x) / 2)
  mesh.translateY(826.5)
  mesh.translateZ((size.min.y + size.max.y) / 2)

  map.polygons.addThreeJsMesh(mesh, { tryToQuadify: DONT_QUADIFY })
}
