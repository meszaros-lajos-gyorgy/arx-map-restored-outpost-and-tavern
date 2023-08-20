import { ArxMap } from 'arx-level-generator'
import { addUpstairsFloor } from '@/adjustments/tavern/addUpstairsFloor.js'
import { removeBlockedStairs } from '@/adjustments/tavern/removeBlockedStairs.js'
import { removeCeiling } from '@/adjustments/tavern/removeCeiling.js'
import { removeUpstairsFiller } from '@/adjustments/tavern/removeUpstairsFiller.js'

export const adjustTavern = (map: ArxMap) => {
  removeCeiling(map)
  removeBlockedStairs(map)
  removeUpstairsFiller(map)
  addUpstairsFloor(map)
}
