import { ArxMap, Texture } from 'arx-level-generator'
import { Box2, Vector2 } from 'three'
import { woodFloor } from '@/textures.js'
import { fillFloor } from '@/tools/fillFloor.js'

export const addUpstairsFloor = (map: ArxMap) => {
  const yPos = 826.5
  const floor1Box = new Box2(new Vector2(8735, 12789), new Vector2(9402, 13550))
  const floor2Box = new Box2(new Vector2(10193, 12789), new Vector2(11250, 13550))
  const floor3Box = new Box2(new Vector2(9402, 12789), new Vector2(9700, 13425))
  const floor4Box = new Box2(new Vector2(9700, 12789), new Vector2(9770, 13550))
  const floor5Box = new Box2(new Vector2(9770, 12789), new Vector2(10193, 12990))
  const floor6Box = new Box2(new Vector2(9770, 13350), new Vector2(10193, 13550))

  fillFloor(floor1Box, yPos, woodFloor, map)
  fillFloor(floor2Box, yPos, woodFloor, map)
  fillFloor(floor3Box, yPos, woodFloor, map)
  fillFloor(floor4Box, yPos, woodFloor, map)
  fillFloor(floor5Box, yPos, woodFloor, map)
  fillFloor(floor6Box, yPos, woodFloor, map)
}
