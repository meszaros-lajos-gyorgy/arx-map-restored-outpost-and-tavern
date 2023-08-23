import { ArxMap, Texture } from 'arx-level-generator'
import { Box2, Vector2 } from 'three'
import { fillFloor } from '@/tools/fillFloor.js'

const woodFloor = new Texture({ filename: '[wood]_floor.jpg' })

export const addUpstairsFloor = (map: ArxMap) => {
  const yPos = 826.5
  const floor1Box = new Box2(new Vector2(8735, 12789), new Vector2(9402, 13550))

  fillFloor(floor1Box, yPos, woodFloor, map)
}
