import { ArxMap, Rotation, Vector3 } from 'arx-level-generator'
import { MathUtils, Vector2 } from 'three'
import { woodFloor, woodHumanDirtPlanks } from '@/textures.js'
import { addPlane } from '@/tools/addPlane.js'

export const addStairs = (map: ArxMap) => {
  addPlane(map, {
    size: new Vector2(390, 358),
    texture: woodHumanDirtPlanks,
    orientation: new Rotation(0, 0, MathUtils.degToRad(139)),
    position: new Vector3(9800 + 200 + 46, 800 + 174, 12980 + 192),
    uvScale: new Vector2(0.25, 0.25),
  })

  addPlane(map, {
    size: new Vector2(419, 358),
    texture: woodHumanDirtPlanks,
    orientation: new Rotation(0, 0, MathUtils.degToRad(138 - 180)),
    position: new Vector3(9800 + 200 + 38, 800 + 165, 12980 + 192),
    uvScale: new Vector2(0.25, 0.25),
  })

  addPlane(map, {
    size: new Vector2(400, 200),
    texture: woodFloor,
    orientation: new Rotation(0, MathUtils.degToRad(90), 0),
    position: new Vector3(9800 + 45, 800 + 152 + 150, 12980 + 192),
    uvScale: new Vector2(0.5, 0.5),
  })
}
