import { ArxMap, DONT_QUADIFY, Material, SHADING_FLAT, Vector3 } from 'arx-level-generator'
import { createBox } from 'arx-level-generator/prefabs/mesh'
import { stoneHumanWall5b } from '@/textures.js'

export const addChimney = (map: ArxMap) => {
  const chimneySize = new Vector3(298, 400, 125)

  const chimney = createBox({
    position: new Vector3(9402 + chimneySize.x / 2, 826.5 - chimneySize.y / 2, 13425 + chimneySize.z / 2),
    size: chimneySize,
    materials: Material.fromTexture(stoneHumanWall5b),
  })

  map.polygons.addThreeJsMesh(chimney, { tryToQuadify: DONT_QUADIFY, shading: SHADING_FLAT })
}
