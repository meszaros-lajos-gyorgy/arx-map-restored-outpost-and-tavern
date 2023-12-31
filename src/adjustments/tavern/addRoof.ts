import { ArxMap, Rotation, Vector3 } from 'arx-level-generator'
import { MathUtils, Vector2 } from 'three'
import { stoneHumanWall2a, stoneHumanWall5a, stoneHumanWall5b, woodBlacksmithCeiling1, woodDoor } from '@/textures.js'
import { addPlane } from '@/tools/addPlane.js'

const addNorthCobbleWall = (map: ArxMap) => {
  const wallWidth = 3000
  const northWallPos = new Vector3(8250 + wallWidth / 2, 700, 13550)
  const northWallSize = new Vector2(wallWidth, 200)

  addPlane(map, {
    position: northWallPos,
    size: northWallSize,
    orientation: new Rotation(MathUtils.degToRad(90), 0, 0),
    texture: stoneHumanWall2a,
    uvScale: new Vector2(0.25, 0.25),
  })
}

const addSouthCobbleWall = (map: ArxMap) => {
  const wallWidth = 1640
  const southWallPos = new Vector3(8250 + wallWidth / 2, 700, 12200)
  const southWallSize = new Vector2(wallWidth, 200)

  addPlane(map, {
    position: southWallPos,
    size: southWallSize,
    orientation: new Rotation(MathUtils.degToRad(-90), 0, 0),
    texture: stoneHumanWall2a,
    uvScale: new Vector2(0.3, 0.3),
  })
}

const addWestStoneWall = (map: ArxMap) => {
  addPlane(map, {
    position: new Vector3(8260, 700 - 250, 12855),
    size: new Vector2(1370, 200 + 500),
    orientation: new Rotation(MathUtils.degToRad(90), 0, MathUtils.degToRad(90)),
    texture: stoneHumanWall5b,
    uvScale: new Vector2(0.4, 0.4),
  })
}

const addEastStoneWall = (map: ArxMap) => {
  addPlane(map, {
    position: new Vector3(8260 + 2190, 700 - 250, 12855 - 1370 / 4 + 15),
    size: new Vector2(1370 / 2, 200 + 500),
    orientation: new Rotation(MathUtils.degToRad(90), 0, MathUtils.degToRad(-90)),
    texture: stoneHumanWall5b,
    uvScale: new Vector2(0.4, 0.4),
  })
}

const addNorthRoof = (map: ArxMap) => {
  const roofWidth = 3000

  const northWallPos = new Vector3(8250 + roofWidth / 2, 700, 13550)
  const northWallSize = new Vector2(roofWidth, 200)
  const a0 = 0
  const b0 = northWallSize.y / 2

  // -----------

  const northLowerRoofSize = new Vector2(roofWidth, 400)
  const northLowerRoofAngle = 40

  const c1 = northLowerRoofSize.y / 2
  const a1 = c1 * Math.sin(MathUtils.degToRad(northLowerRoofAngle))
  const b1 = c1 * Math.sin(MathUtils.degToRad(90 - northLowerRoofAngle))

  const northLowerRoofOffset = new Vector3(0, -(b0 + b1), -(a0 + a1))
  const northLowerRoofPos = northWallPos.clone().add(northLowerRoofOffset)

  // -----------

  const northUpperRoof1Size = new Vector2(roofWidth, 200)
  const northUpperRoof1Angle = northLowerRoofAngle + 30

  const c2 = northUpperRoof1Size.y / 2
  const a2 = c2 * Math.sin(MathUtils.degToRad(northUpperRoof1Angle))
  const b2 = c2 * Math.sin(MathUtils.degToRad(90 - northUpperRoof1Angle))

  const northUpperRoof1Offset = new Vector3(0, -(b1 + b2), -(a1 + a2))
  const northUpperRoof1Pos = northLowerRoofPos.clone().add(northUpperRoof1Offset)

  // -----------

  const northUpperRoof2Size = new Vector2(roofWidth, 250)
  const northUpperRoof2Angle = northUpperRoof1Angle

  const c3 = northUpperRoof2Size.y / 2
  const a3 = c3 * Math.sin(MathUtils.degToRad(northUpperRoof1Angle))
  const b3 = c3 * Math.sin(MathUtils.degToRad(90 - northUpperRoof1Angle))

  const northUpperRoof2Offset = new Vector3(0, -(b2 + b3), -(a2 + a3))
  const northUpperRoof2Pos = northUpperRoof1Pos.clone().add(northUpperRoof2Offset)

  // -----------

  addPlane(map, {
    position: northLowerRoofPos,
    size: northLowerRoofSize,
    orientation: new Rotation(MathUtils.degToRad(90 + northLowerRoofAngle), 0, 0),
    texture: stoneHumanWall5a,
    uvScale: new Vector2(0.4, 0.4),
  })

  addPlane(map, {
    position: northUpperRoof1Pos,
    size: northUpperRoof1Size,
    orientation: new Rotation(MathUtils.degToRad(90 + northUpperRoof1Angle), 0, 0),
    texture: woodDoor,
    uvScale: new Vector2(0.5, 0.5),
  })

  addPlane(map, {
    position: northUpperRoof2Pos,
    size: new Vector2(northUpperRoof2Size.y, northUpperRoof2Size.x),
    orientation: new Rotation(MathUtils.degToRad(90 + northUpperRoof2Angle), MathUtils.degToRad(90), 0),
    texture: woodBlacksmithCeiling1,
    uvScale: new Vector2(0.5, 0.5),
  })
}

const addSouthRoof = (map: ArxMap) => {
  const roofWidth = 2200

  const southWallPos = new Vector3(8250 + roofWidth / 2, 700, 12200)
  const southWallSize = new Vector2(roofWidth, 200)
  const a0 = 0
  const b0 = southWallSize.y / 2

  // -----------

  const southLowerRoofSize = new Vector2(roofWidth, 400)
  const southLowerRoofAngle = -40

  const c1 = southLowerRoofSize.y / 2
  const a1 = c1 * Math.sin(MathUtils.degToRad(southLowerRoofAngle))
  const b1 = c1 * Math.sin(MathUtils.degToRad(90 - southLowerRoofAngle))

  const southLowerRoofOffset = new Vector3(0, -(b0 + b1), -(a0 + a1))
  const southLowerRoofPos = southWallPos.clone().add(southLowerRoofOffset)

  // -----------

  const southUpperRoof1Size = new Vector2(roofWidth, 200)
  const southUpperRoof1Angle = southLowerRoofAngle - 30

  const c2 = southUpperRoof1Size.y / 2
  const a2 = c2 * Math.sin(MathUtils.degToRad(southUpperRoof1Angle))
  const b2 = c2 * Math.sin(MathUtils.degToRad(90 - southUpperRoof1Angle))

  const southUpperRoof1Offset = new Vector3(0, -(b1 + b2), -(a1 + a2))
  const southUpperRoof1Pos = southLowerRoofPos.clone().add(southUpperRoof1Offset)

  // -----------

  const southUpperRoof2Size = new Vector2(roofWidth, 250)
  const southUpperRoof2Angle = southUpperRoof1Angle

  const c3 = southUpperRoof2Size.y / 2
  const a3 = c3 * Math.sin(MathUtils.degToRad(southUpperRoof1Angle))
  const b3 = c3 * Math.sin(MathUtils.degToRad(90 - southUpperRoof1Angle))

  const southUpperRoof2Offset = new Vector3(0, -(b2 + b3), -(a2 + a3))
  const southUpperRoof2Pos = southUpperRoof1Pos.clone().add(southUpperRoof2Offset)

  // -----------

  addPlane(map, {
    position: southLowerRoofPos,
    size: southLowerRoofSize,
    orientation: new Rotation(MathUtils.degToRad(-90 + southLowerRoofAngle), 0, 0),
    texture: stoneHumanWall5a,
    uvScale: new Vector2(0.4, 0.4),
  })

  addPlane(map, {
    position: southUpperRoof1Pos,
    size: southUpperRoof1Size,
    orientation: new Rotation(MathUtils.degToRad(-90 + southUpperRoof1Angle), 0, 0),
    texture: woodDoor,
    uvScale: new Vector2(0.5, 0.5),
  })

  addPlane(map, {
    position: southUpperRoof2Pos,
    size: new Vector2(southUpperRoof2Size.y, southUpperRoof2Size.x),
    orientation: new Rotation(MathUtils.degToRad(-90 + southUpperRoof2Angle), MathUtils.degToRad(90), 0),
    texture: woodBlacksmithCeiling1,
    uvScale: new Vector2(0.5, 0.5),
  })
}

export const addRoof = (map: ArxMap) => {
  addWestStoneWall(map)
  addEastStoneWall(map)

  addNorthCobbleWall(map)
  addSouthCobbleWall(map)

  addNorthRoof(map)
  addSouthRoof(map)
}
