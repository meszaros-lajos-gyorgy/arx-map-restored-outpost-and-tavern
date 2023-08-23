import { ArxMap, DONT_QUADIFY, Texture } from 'arx-level-generator'
import { createPlaneMesh } from 'arx-level-generator/prefabs/mesh'
import { Box2, Vector2 } from 'three'

export const fillFloor = (box: Box2, yPos: number, texture: Texture, map: ArxMap) => {
  const mesh = createPlaneMesh({
    size: new Vector2(box.max.x - box.min.x, box.max.y - box.min.y),
    texture,
  })
  mesh.translateX((box.min.x + box.max.x) / 2)
  mesh.translateY(yPos)
  mesh.translateZ((box.min.y + box.max.y) / 2)

  map.polygons.addThreeJsMesh(mesh, { tryToQuadify: DONT_QUADIFY })
}
