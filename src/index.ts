import { ArxMap, Color, Settings, Vector3 } from 'arx-level-generator'
import { createZone } from 'arx-level-generator/tools'
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

// -----------------------------------

map.removePortals()

const texturesToBeRemoved = [
  '[wood]_blacksmith_ceiling1',
  '[wood]_blacksmith_ceiling2',
  '[stone]_human_wall4a',
  '[stone]_human_wall4b',
]

const numberOfPolygons = map.polygons.length
for (let i = numberOfPolygons - 1; i > 0; i--) {
  const polygon = map.polygons[i]
  const textureName = polygon.texture?.filename.toLowerCase() ?? ''
  let shouldBeRemoved = false
  for (let match of texturesToBeRemoved) {
    if (textureName.includes(match)) {
      shouldBeRemoved = true
      break
    }
  }

  if (shouldBeRemoved) {
    map.polygons.splice(i, 1)
  }
}

const skyChanger = createZone({
  name: 'sky_changer',
  position: map.player.position.clone(),
  size: new Vector3(100, Infinity, 100),
  backgroundColor: Color.fromCSS('lightblue').darken(50),
})

map.zones.push(skyChanger)

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

await compile(settings)

console.log('done')
