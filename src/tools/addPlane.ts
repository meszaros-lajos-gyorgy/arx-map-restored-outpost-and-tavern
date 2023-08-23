import { ArxMap, DONT_QUADIFY, Rotation, SHADING_FLAT, Texture, Vector3 } from 'arx-level-generator'
import { createPlaneMesh } from 'arx-level-generator/prefabs/mesh'
import { scaleUV } from 'arx-level-generator/tools/mesh'
import { applyTransformations } from 'arx-level-generator/utils'
import { MathUtils, Vector2 } from 'three'

type addPlaneProps = {
  position?: Vector3
  orientation?: Rotation
  size: Vector2
  texture: Texture
  uvScale?: Vector2
  uvRotate?: number
}

export const addPlane = (map: ArxMap, { position, orientation, size, texture, uvScale, uvRotate }: addPlaneProps) => {
  const plane = createPlaneMesh({ size, texture })

  if (orientation) {
    plane.rotateX(orientation.x)
    plane.rotateY(orientation.y)
    plane.rotateZ(orientation.z)
    applyTransformations(plane)
  }

  if (position) {
    plane.translateX(position.x)
    plane.translateY(position.y)
    plane.translateZ(position.z)
    applyTransformations(plane)
  }

  if (uvScale) {
    scaleUV(uvScale, plane.geometry)
  }

  if (uvRotate) {
    // TODO
  }

  map.polygons.addThreeJsMesh(plane, { tryToQuadify: DONT_QUADIFY, shading: SHADING_FLAT })
}
