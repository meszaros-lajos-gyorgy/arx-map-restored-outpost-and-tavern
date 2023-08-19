import { ArxMap, Settings } from 'arx-level-generator'
import { compile } from 'arx-level-generator/utils'

const settings = new Settings({
  levelIdx: parseInt(process.env.levelIdx ?? '1'),
  outputDir: process.env.outputDir,
  seed: process.env.seed,
  version: process.env.version === 'premium' ? 'premium' : 'normal',
  calculateLighting: process.env.calculateLighting === 'false' ? false : true,
  mode: process.env.mode === 'development' ? 'development' : 'production',
  originalLevelFiles: process.env.originalLevelFiles,
})

const map = await ArxMap.fromOriginalLevel(12, settings)
map.meta.mapName = 'Outpost and Tavern'

map.removePortals()

// -----------------------------------

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

await compile(settings)

console.log('done')
