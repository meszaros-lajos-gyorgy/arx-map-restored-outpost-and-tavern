import { ArxMap, Settings } from 'arx-level-generator'
import { adjustAll } from '@/adjustments/all.js'
import { adjustOutpost } from '@/adjustments/outpost.js'
import { adjustTavern } from '@/adjustments/tavern.js'

const settings = new Settings({
  levelIdx: parseInt(process.env.levelIdx ?? '12'),
  outputDir: process.env.outputDir,
  seed: process.env.seed,
  variant: process.env.variant === 'premium' ? 'premium' : 'normal',
  calculateLighting: process.env.calculateLighting === 'false' ? false : true,
  mode: process.env.mode === 'development' ? 'development' : 'production',
  originalLevelFiles: process.env.originalLevelFiles,
})

const map = await ArxMap.fromOriginalLevel(12, settings)

// -----------------------------------

adjustTavern(map)
adjustOutpost(map)
adjustAll(map)

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

console.log('done')
