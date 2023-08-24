import { ArxMap } from 'arx-level-generator'
import { addChimney } from '@/adjustments/tavern/addChimney.js'
import { addRoof } from '@/adjustments/tavern/addRoof.js'
import { addStairs } from '@/adjustments/tavern/addStairs.js'
import { addUpstairsFloor } from '@/adjustments/tavern/addUpstairsFloor.js'
import { addUpstairsLighting } from '@/adjustments/tavern/addUpstairsLighting.js'
import { removeBlockedStairs } from '@/adjustments/tavern/removeBlockedStairs.js'
import { removeCeiling } from '@/adjustments/tavern/removeCeiling.js'
import { removeUpstairsFiller } from '@/adjustments/tavern/removeUpstairsFiller.js'

export const adjustTavern = (map: ArxMap) => {
  removeCeiling(map)
  removeBlockedStairs(map)
  removeUpstairsFiller(map)
  addUpstairsFloor(map)
  addChimney(map)
  addRoof(map)
  addStairs(map)
  addUpstairsLighting(map)
}
