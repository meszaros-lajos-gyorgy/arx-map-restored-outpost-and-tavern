import { ArxMap, Texture } from 'arx-level-generator'
import { Box2, Vector2 } from 'three'
import { addFloor } from '@/tools/addFloor.js'

const woodFloor = new Texture({ filename: '[wood]_floor.jpg' })

export const addUpstairsFloor = (map: ArxMap) => {
  const floor1 = new Box2(new Vector2(8735, 12789), new Vector2(9402, 13550))

  addFloor(floor1, 826.5, woodFloor, map)
}
