import { ArxMap, Settings } from 'arx-level-generator'
import { adjustAll } from '@/adjustments/all.js'
import { adjustOutpost } from '@/adjustments/outpost.js'
import { adjustTavern } from '@/adjustments/tavern.js'

const settings = new Settings()

const map = await ArxMap.fromOriginalLevel(12, settings)

// -----------------------------------

adjustTavern(map)
adjustOutpost(map)
adjustAll(map)

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

console.log('done')
