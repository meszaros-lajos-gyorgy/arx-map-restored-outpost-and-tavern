import { ArxMap } from 'arx-level-generator'
import { addSky } from '@/adjustments/all/addSky.js'
import { makePolygonsDoubleSided } from '@/tools/makePolygonsDoubleSided.js'

export const adjustAll = (map: ArxMap) => {
  map.removePortals()
  // addSky(map)
  // makePolygonsDoubleSided(map)
}
